import React, { useState, useEffect } from 'react';
import './offerproduct.css';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import axios from 'axios';

function OfferProduct({ onAddToCart }) {
  const [products, setProducts] = useState([]);
  const [wishlistProducts, setWishlistProducts] = useState([]);
  const [message, setMessage] = useState('');
  const isMobile = useMediaQuery("(max-width:600px)");

  // Fetch all products
  const getProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/product/products/', {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const filteredProducts = response.data.filter(product => product.product_category === 'combo');
      setProducts(filteredProducts);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  // Fetch liked products from the wishlist when the component mounts
  const getWishlist = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/wishlist/Wishlist/', {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      setWishlistProducts(response.data);  // Save the wishlist data (including wishlist IDs)
    } catch (error) {
      console.error('Error fetching wishlist:', error);
    }
  };

  useEffect(() => {
    getProducts();
    getWishlist();  // Fetch both products and wishlist when the component mounts
  }, []);

  // Check if a product is in the wishlist (based on product ID)
  const isProductInWishlist = (productId) => {
    return wishlistProducts.some(wishlistItem => wishlistItem.wishlist_product_id === productId);
  };

  // Get the wishlist item ID based on the product ID (for deletion)
  const getWishlistId = (productId) => {
    const wishlistItem = wishlistProducts.find(wishlistItem => wishlistItem.wishlist_product_id === productId);
    return wishlistItem ? wishlistItem.id : null;
  };

  // Handle like button click (add/remove from wishlist)
  const handleLikeClick = async (product) => {
    if (isProductInWishlist(product.id)) {
      // If the product is already in the wishlist, remove it
      const wishlistId = getWishlistId(product.id);
      if (wishlistId) {
        try {
          await axios.delete(`http://localhost:8000/api/wishlist/Wishlist/${wishlistId}/`, {
            headers: {
              'Content-Type': 'application/json',
            }
          });
          console.log(`${product.product_name} removed from wishlist.`);
          setWishlistProducts(wishlistProducts.filter(item => item.id !== wishlistId));  // Remove from the state
        } catch (error) {
          console.error('Error removing from wishlist:', error);
        }
      }
    } else {
      // If the product is not in the wishlist, add it
      try {
        const response = await axios.post('http://localhost:8000/api/wishlist/Wishlist/', {
          wishlist_id: 2,  // User ID
          wishlist_product_id: product.id,  // Product ID
        }, {
          headers: {
            'Content-Type': 'application/json',
          }
        });
        console.log(`${product.product_name} added to the wishlist.`);
        setWishlistProducts([...wishlistProducts, response.data]);  // Add the new wishlist item to the state
      } catch (error) {
        console.error('Error adding to wishlist:', error);
      }
    }
  };

  const handleBuyNow = (product) => {
    if (product.product_qty > 0) {
      setMessage(`You have successfully bought ${product.product_name}`);
      // Proceed with buying logic
    } else {
      setMessage(`${product.product_name} is out of stock!`);
    }
  };

  const handleAddToCart = (product) => {
    if (product.product_qty > 0) {
      if (!product.isAddedToCart) {
        setMessage(`${product.product_name} has been added to your cart.`);
        onAddToCart(product);
        const updatedProducts = products.map(p =>
          p.id === product.id ? { ...p, isAddedToCart: true } : p
        );
        setProducts(updatedProducts);
      } else {
        setMessage(`${product.product_name} is already in your cart.`);
      }
    } else {
      setMessage(`${product.product_name} is out of stock!`);
    }
  };

  return (
    <div style={{ marginLeft: isMobile ? "" : "10vh", marginRight: isMobile ? "" : "10vh", marginTop: "5vh" }}>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-item">
            <div 
              className={`favorite-button ${isProductInWishlist(product.id) ? 'favorite' : ''}`} 
              onClick={() => handleLikeClick(product)}
            >
              {isProductInWishlist(product.id) ? '❤️' : '♡'}
            </div>
            <img src={product.product_image} alt={product.product_name} className="product-image" />
            <p className="product-name">
              <span style={{ fontWeight: "bold" }}>{product.product_name}</span>
            </p>
            <p className="product-price">
              <CurrencyRupeeIcon style={{ paddingTop: "-10px", fontSize: "15px" }} />
              {product.product_price}
              <span style={{ marginLeft: "10px", textDecoration: "line-through" }}>{product.docorprice}</span>
            </p>
            <div className="buttons">
              <button className="buy-now" onClick={() => handleBuyNow(product)}>
                <Link to="/address" style={{ color: "white" }}>Buy Now</Link>
              </button>
              <button className="cart" onClick={() => handleAddToCart(product)}>Add Cart</button>
            </div>
          </div>
        ))}
        {message && <div className="message">{message}</div>}
      </div>
    </div>
  );
}

export default OfferProduct;
