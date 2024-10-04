import React, { useState, useEffect } from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";

// Sample product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
];

const ProductList = () => {
  const [cart, setCart] = useState([]);
  const [remindedProducts, setRemindedProducts] = useState([]); // To track products that have been reminded

  // Add product to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <Typography variant="h4">Products</Typography>
      {products.map((product) => (
        <Card key={product.id} style={{ marginBottom: "10px" }}>
          <CardContent>
            <Typography variant="h6">{product.name}</Typography>
            <Typography variant="body1">Price: ${product.price}</Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </Button>
          </CardContent>
        </Card>
      ))}
      <Cart cart={cart} remindedProducts={remindedProducts} setRemindedProducts={setRemindedProducts} />
    </div>
  );
};

// Cart component that sends a one-time reminder 5 minutes after items are added to the cart
const Cart = ({ cart, remindedProducts, setRemindedProducts }) => {
  useEffect(() => {
    let reminderTimeouts = [];

    cart.forEach((product) => {
      // Check if the product has not been reminded already
      if (!remindedProducts.includes(product.id)) {
        const reminderTimeout = setTimeout(() => {
          alert(`Reminder: The product "${product.name}" is still in your cart. Don't forget to check out!`);
          // Mark the product as reminded
          setRemindedProducts((prev) => [...prev, product.id]);
        }, 300000); // 5 minutes

        reminderTimeouts.push(reminderTimeout);
      }
    });

    // Clear timeouts when cart changes or when the component unmounts
    return () => reminderTimeouts.forEach(clearTimeout);
  }, [cart, remindedProducts, setRemindedProducts]);

  return (
    <div>
      <Typography variant="h5">Cart</Typography>
      {cart.length === 0 ? (
        <Typography variant="body1">Cart is empty</Typography>
      ) : (
        cart.map((item, index) => (
          <Typography key={index} variant="body1">
            {item.name} - ${item.price}
          </Typography>
        ))
      )}
    </div>
  );
};

export default ProductList;
