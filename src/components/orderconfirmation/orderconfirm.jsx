import React, { useState } from "react";
import "./orderconfirm.css";

const OrderSuccess = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handlePlaceOrder = () => {
    setShowSuccess(true);

    // Hide the success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <div className="order-container">
      {/* <button onClick={handlePlaceOrder} className="place-order-btn">
        Place Order
      </button> */}

     
        <div className="success-animation">
          <div className="checkmark-circle">
            <div className="checkmark"></div>
          </div>
          <h2>Order Placed Successfully!</h2>
        </div>
     
    </div>
  );
};

export default OrderSuccess;
