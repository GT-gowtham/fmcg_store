
import React, { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/foot/foot';
import CookieConsent from './components/cookies';
import ShippingPolicy from './components/shippingPolicy';
import TermsConditions from './components/terms&Conditions';
import RefundsReplacement from './components/refunds&Replacement';
import PrivacyPolicy from './components/privacyPolicy';
import FeedBack from './components/feedback';
import AboutUs from './components/about/about';
import ContactPage from './components/contact/ContactPage';
import Home from './components/home/home';
import ProductCart from './components/productCart';
import Favorite from './components/favorite';
import Payment from './components/payment';
import Address from './components/address/address';
import OrderSuccess from './components/orderconfirmation/orderconfirm';
import OfferProduct from './offerproduct/offerproduct';
import UnderConstruction from './components/UnderConstruction/UnderConstruction';
import Login from './components/login/login';
import Forgot from './components/login/forgot';
import Signup from './components/login/signup';
import NewPassword from './components/login/newPassword';
import Otppage from './components/login/otp';

const products = [
  {
    id: 1,
    name: "Product 1",
    image: "path_to_image_1.jpg",
    price: 100,
  },
  {
    id: 2,
    name: "Product 2",
    image: "path_to_image_2.jpg",
    price: 200,
  },
  // Add more products as needed
];

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [likedProducts, setLikedProducts] = useState([]);
  
  const location = useLocation();
  
  const isUnderConstruction = location.pathname === '/underconstruction';

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      if (!prevItems.find((item) => item.id === product.id)) {
        return [...prevItems, product];
      }
      return prevItems;
    });
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };


  

  const handleProductLiked = (product) => {
    setLikedProducts((prevLiked) => {
      if (prevLiked.includes(product.id)) {
        return prevLiked.filter((id) => id !== product.id);
      }
      return [...prevLiked, product.id];
    });
  };

  const handleLikeToggle = (product) => {
    setLikedProducts((prevLikedProducts) => {
      const isLiked = prevLikedProducts.find((p) => p.id === product.id);
      if (isLiked) {
        return prevLikedProducts.filter((p) => p.id !== product.id);
      } else {
        return [...prevLikedProducts, product];
      }
    });
  };
  

  return (
    <div className="App">
      {!isUnderConstruction && (
        <>
          <Header
            cartItemCount={cartItems.length}
            cartItems={cartItems}
            likedProducts={likedProducts}
          />
        </>
      )}

      <Routes>
        <Route path="/shipping" element={<ShippingPolicy />} />
        <Route path="/termsConditions" element={<TermsConditions />} />
        <Route path="/refundsReplacement" element={<RefundsReplacement />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/feedback" element={<FeedBack />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/address" element={<Address />} />
       
        <Route path="/orderConfirm" element={<OrderSuccess />} />
        <Route path="/offerproduct" element={<OfferProduct  likedProducts={likedProducts}
              onAddToCart={handleAddToCart}
              onLikeToggle={handleLikeToggle}
              
              />} />
        <Route path="/underconstruction" element={<UnderConstruction />} />
        <Route
          path="/product"
          element={
            <ProductCart
              cartItems={cartItems}
              handleRemoveItem={handleRemoveItem}
            />
          }
        />
        <Route
          path="/favorite"
          element={
            <Favorite
              likedProducts={likedProducts}
              onAddToCart={handleAddToCart}
              onLikeToggle={handleLikeToggle}
            />
          }
        />
        <Route
          path="/"
          element={
            <Home
              onAddToCart={handleAddToCart}
              onProductLiked={handleProductLiked}
              products={products}
              likedProducts={likedProducts.map((p) => p.id)}
              onLikeToggle={handleLikeToggle}
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/otpp" element={<Otppage/>}/>
        <Route path="/newpassword" element={<NewPassword />} />
      </Routes>

      {!isUnderConstruction && (
        <>
          <CookieConsent />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
