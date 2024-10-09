// import React, { useState } from 'react';
// import './home.css';
// import FabricConditioner from '../assets/HomeAssets/fabricconditioner.png';
// import Dishwash from '../assets/HomeAssets/dishwashgel.png';
// import FloorCleaner from '../assets/HomeAssets//floorcleaner.png';
// import GlassCleaner from '../assets/HomeAssets//glasscleaner.png';
// import LiquidDetergent from '../assets/HomeAssets//liquid detergent.jpeg';
// import HandWash from '../assets/HomeAssets/Handwash.jpg';
// import ToiletCleaner from '../assets/HomeAssets/ToiletCleaner.png';
// import { Link } from 'react-router-dom';
// import { useMediaQuery } from '@mui/material';
// import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
// import ImageSlider from '../imageSlider';
// import OfferZoneBanner from "../../components/OfferZoneBanner/offerZoneBanner";



// const initialProducts = [
  
//   { id: 1, name: 'Fabric Contioner', price : 99 ,docorprice:120, ml:500, image: FabricConditioner, inStock: true, isFavorite: false },
//   { id: 2, name: 'Dishwash Gel', price: 85,docorprice:98, ml:500, image: Dishwash, inStock: false, isFavorite: false },
//   { id: 3, name: 'Floor Cleaner', price: 85,docorprice:110, ml:500, image: FloorCleaner, inStock: true, isFavorite: false },
//   { id: 4, name: 'Glass Cleaner', price: 99,docorprice:110, ml:500, image: GlassCleaner, inStock: true, isFavorite: false },
//   { id: 5, name: 'Liquid Detergent', price: 85,docorprice:120, ml:500, image:LiquidDetergent, inStock: true, isFavorite: false },
//   { id: 6, name: 'Hand Wash', price: 99,docorprice:120, ml:500, image: HandWash, inStock: false, isFavorite: false },
//   { id: 7, name: 'Toilet Cleaner', price: 85,docorprice:98, ml:500, image: ToiletCleaner, inStock: true, isFavorite: false },

// ];

// function Home({ onAddToCart, likedProducts, onLikeToggle }) {
//   const [products, setProducts] = useState(initialProducts);
//   const [message, setMessage] = useState('');
//   const isMobile = useMediaQuery("(max-width:600px)");

//   const toggleFavorite = (productId) => {
//     const updatedProducts = products.map(product => {
//       if (product.id === productId) {
//         return { ...product, isFavorite: !product.isFavorite };
//       }
//       return product;
//     });
//     setProducts(updatedProducts);
//   };
  

//   const handleBuyNow = (product) => {
//     if (product.inStock) {
//       setMessage(`You have successfully bought ${product.name}`);
//       // Proceed with buying logic
//     } else {
//       setMessage(`${product.name} is out of stock!`);
//     }
//   };

//   const handleAddToCart = (product) => {
//     if (product.inStock) {
//       if (!product.isAddedToCart) {
//         setMessage(`${product.name} has been added to your cart.`);
//         onAddToCart(product);
//         const updatedProducts = products.map(p =>
//           p.id === product.id ? { ...p, isAddedToCart: true } : p
//         );
//         setProducts(updatedProducts);
//       } else {
//         setMessage(`${product.name} is already in your cart.`);
//       }
//     } else {
//       setMessage(`${product.name} is out of stock!`);
//     }
//   };
//   const handleLikeClick = (product) => {
//     onLikeToggle(product);
//   };

//   return (
    
// <div style={{marginLeft: isMobile ? "" : "10vh", marginRight: isMobile ? "" : "10vh", marginTop:"5vh" }}>
// {isMobile? "" : <ImageSlider/>}
// <OfferZoneBanner />

//     <div className="product-list">
//     {products.map(product => (
//         <div key={product.id} className="product-item">
  
// <div 
//   className="favorite-button" 
//   onClick={() => handleLikeClick(product)} 
//   style={{ color: likedProducts.includes(product.id) ? 'red' : 'black', border: 'none', background: 'none' }}
// >
//   {likedProducts.includes(product.id) ? '❤️' : '♡'}
// </div>

//           <img src={product.image} alt={product.name} className="product-image" />
//           <p className="product-name"><span style={{fontWeight:"bold"}}>{product.name}</span><span style={{fontSize:"13px", fontWeight:"10px", marginLeft:"10px"}}>ML: {product.ml}</span></p>
//           <p className="product-price"><CurrencyRupeeIcon style={{paddingTop:"-10px", fontSize:"15px"}}/>{product.price}<span style={{marginLeft:"10px", textDecoration: "line-through"}}>{product.docorprice}</span></p>
//           <div className="buttons">
//             <button className="buy-now" onClick={() => handleBuyNow(product)}>
//               <Link to="/address" style={{color:"white"}}>Buy Now</Link></button>
//             <button className="cart" onClick={() => handleAddToCart(product)}>Add Cart</button>
//           </div>
//         </div>
//       ))}
//       {message && <div className="message">{message}</div>}
     
//       </div>


//       <section className="section contact">
//       <div className="row">
//         <div className="col">
//           <h2>EXCELLENT SUPPORT !</h2>
//           <p><strong>We Love Our Customers And They Can Reach Us Anytime Of Day We Will Be At Your Service 24/7</strong></p>
//           <a href="contact.html" className="btn btn-1">Contact</a>
//         </div>
//         <div className="col">
//           <form action="">
//             <div>
//               <input type="email" placeholder="Email Address" />
//               <a href="mailto:fmcg@hifiitpark.com" className="send-button">Send</a>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//     </div>
   
//   );
// }

// export default Home;

import React, { useState, useEffect } from 'react';
import './home.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ImageSlider from '../imageSlider';
import OfferZoneBanner from "../../components/OfferZoneBanner/offerZoneBanner";

function Home({ onAddToCart }) {
  const [products, setProducts] = useState([]);
  const [wishlistProducts, setWishlistProducts] = useState([]);
  const [message, setMessage] = useState('');
  const isMobile = useMediaQuery("(max-width:600px)");

  // Fetch products from the backend
  const getProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/product/products/', {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const filteredProducts = response.data.filter(product => product.product_category === 'product');
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
      setWishlistProducts(response.data); // Save the wishlist data
    } catch (error) {
      console.error('Error fetching wishlist:', error);
    }
  };

  useEffect(() => {
    getProducts();
    getWishlist(); // Fetch both products and wishlist when the component mounts
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
          setWishlistProducts(wishlistProducts.filter(item => item.id !== wishlistId));  // Remove from state
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
    if (product.inStock) {
      setMessage(`You have successfully bought ${product.name}`);
    } else {
      setMessage(`${product.name} is out of stock!`);
    }
  };

  const handleAddToCart = (product) => {
    if (product.product_qty) {
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
      {isMobile ? "" : <ImageSlider />}
      <OfferZoneBanner />

      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-item">
            <div
              className="favorite-button"
              onClick={() => handleLikeClick(product)}
              style={{ color: isProductInWishlist(product.id) ? 'red' : 'black', border: 'none', background: 'none' }}
            >
              {isProductInWishlist(product.id) ? '❤️' : '♡'}
            </div>

            <img src={product.product_image} alt={product.product_name} className="product-image" />
            <p className="product-name"><span style={{ fontWeight: "bold" }}>{product.product_name}</span><span style={{ fontSize: "13px", fontWeight: "10px", marginLeft: "10px" }}> {product.product_qty}</span></p>
            <p className="product-price"><CurrencyRupeeIcon style={{ paddingTop: "-10px", fontSize: "15px" }} />{product.product_price}<span style={{ marginLeft: "10px", textDecoration: "line-through" }}>{product.docorprice}</span></p>
            <div className="buttons">
              <button className="buy-now" onClick={() => handleBuyNow(product)}>
                <Link to="/address" style={{ color: "white" }}>Buy Now</Link></button>
              <button className="cart" onClick={() => handleAddToCart(product)}>Add Cart</button>
            </div>
          </div>
        ))}
        {message && <div className="message">{message}</div>}
      </div>

      <section className="section contact">
        <div className="row">
          <div className="col">
            <h2>EXCELLENT SUPPORT !</h2>
            <p><strong>We Love Our Customers And They Can Reach Us Anytime Of Day We Will Be At Your Service 24/7</strong></p>
            <a href="contact.html" className="btn btn-1">Contact</a>
          </div>
          <div className="col">
            <form action="">
              <div>
                <input type="email" placeholder="Email Address" />
                <a href="mailto:fmcg@hifiitpark.com" className="send-button">Send</a>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
