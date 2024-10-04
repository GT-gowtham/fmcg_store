import React, { useState } from 'react';
import './offerproduct.css';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import FloorCleaner5L from '../components/assets/OfferAssets/Floor Cleaner.jpg';
import LiquidLiquid from '../components/assets/OfferAssets/Liquid&Liquid.png';
import LiquidDish from '../components/assets/OfferAssets/Liquid&Dishwash.png';

const initialProducts = [
  { id: 1, name: 'FloorCleaner(5 Litre)', price: 500, docorprice: 750, image: FloorCleaner5L, inStock: true, isFavorite: false },
  { id: 2, name: 'LiquidDetergent(1+1Litre)', price: 250, docorprice: 400, image: LiquidLiquid, inStock: false, isFavorite: false },
  { id: 3, name: 'Dishwash(500ML+500ML)', price: 145, docorprice: 250, image: LiquidDish, inStock: true, isFavorite: false },
];

function OfferProduct({ onAddToCart, likedProducts = [], onLikeToggle }) {
  const [products, setProducts] = useState(initialProducts);
  const [message, setMessage] = useState('');
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleLikeClick = (product) => {
    const updatedProducts = products.map(p =>
      p.id === product.id ? { ...p, isFavorite: !p.isFavorite } : p
    );
    setProducts(updatedProducts);
    onLikeToggle({ ...product, isFavorite: !product.isFavorite });  // Pass the entire product object with updated favorite status
  };

  const handleBuyNow = (product) => {
    if (product.inStock) {
      setMessage(`You have successfully bought ${product.name}`);
      // Proceed with buying logic
    } else {
      setMessage(`${product.name} is out of stock!`);
    }
  };

  const handleAddToCart = (product) => {
    if (product.inStock) {
      if (!product.isAddedToCart) {
        setMessage(`${product.name} has been added to your cart.`);
        onAddToCart(product);
        const updatedProducts = products.map(p =>
          p.id === product.id ? { ...p, isAddedToCart: true } : p
        );
        setProducts(updatedProducts);
      } else {
        setMessage(`${product.name} is already in your cart.`);
      }
    } else {
      setMessage(`${product.name} is out of stock!`);
    }
  };

  return (
    <div style={{ marginLeft: isMobile ? "" : "10vh", marginRight: isMobile ? "" : "10vh", marginTop: "5vh" }}>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-item">
            <div 
              className={`favorite-button ${product.isFavorite ? 'favorite' : ''}`} 
              onClick={() => handleLikeClick(product)}
            >
              {product.isFavorite ? '❤️' : '♡'}
            </div>
            <img src={product.image} alt={product.name} className="product-image" />
            <p className="product-name">
              <span style={{ fontWeight: "bold" }}>{product.name}</span>
            </p>
            <p className="product-price">
              <CurrencyRupeeIcon style={{ paddingTop: "-10px", fontSize: "15px" }} />
              {product.price}
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
