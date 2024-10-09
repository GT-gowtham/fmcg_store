import React, { useEffect, useState } from "react";
import { Grid, Typography, Box, Container, Button, IconButton } from "@mui/material";
import { Link } from 'react-router-dom';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import axios from 'axios';

function Favorite({ user_id, onAddToCart }) {
  const [likedProducts, setLikedProducts] = useState([]);

  useEffect(() => {
    // Fetch liked products from the wishlist
    axios.get(`http://localhost:8000/api/wishlist/Wishlist/`)
      .then((response) => {
        const wishlistItems = response.data.map(item => ({
          id: item.id, // wishlist table ID
          product: item.wishlist_product_id // product ID
        }));
        
        // Fetch product details using the product IDs
        const productRequests = wishlistItems.map(item => 
          axios.get(`http://localhost:8000/api/product/products/${item.product}/`)
        );

        // Fetch all product details in parallel
        Promise.all(productRequests)
          .then((results) => {
            const products = results.map((res, index) => ({
              ...res.data,
              wishlistId: wishlistItems[index].id // Attach wishlist table ID
            }));
            setLikedProducts(products); // Set the liked products
          })
          .catch((error) => {
            console.error('Error fetching products:', error);
          });
      })
      .catch((error) => {
        console.error('Error fetching wishlist:', error);
      });
  }, [user_id]);

  const handleBuyNow = (product) => {
    if (product.inStock) {
      // Handle buy now logic, e.g., navigate to checkout
    } else {
      alert(`${product.name} is out of stock!`);
    }
  };

  const handleAddToCart = (product) => {
    if (!onAddToCart) {
      console.error('onAddToCart function is not passed as a prop.');
      return;
    }

    if (product.inStock) {
      if (!product.isAddedToCart) {
        onAddToCart(product);
        alert(`${product.name} has been added to your cart.`);
      } else {
        alert(`${product.name} is already in your cart.`);
      }
    } else {
      alert(`${product.name} is out of stock!`);
    }
  };

  const handleFavoriteToggle = (product) => {
    // Directly remove the product from the wishlist by wishlist ID
    axios.delete(`http://localhost:8000/api/wishlist/Wishlist/${product.wishlistId}/`)
      .then(() => {
        // Update the liked products by removing the product from the list
        setLikedProducts((prevLikedProducts) => 
          prevLikedProducts.filter((p) => p.wishlistId !== product.wishlistId)
        );
      })
      .catch((error) => {
        console.error('Error removing from wishlist:', error);
      });
  };

  return (
    <Container sx={{ p: 2, mt: 13 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: 3,
        }}
      >
        Your Liked Products
      </Typography>
      {likedProducts.length > 0 ? (
        <Grid container spacing={2}>
          {likedProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  border: "2px solid #e0e0e0",
                  padding: 2,
                  "&:hover": {
                    boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.2)",
                  },
                  position: "relative",
                }}
              >
                <IconButton
                  sx={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    color: product.isLiked ? "red" : "red",
                  }}
                  onClick={() => handleFavoriteToggle(product)}
                >
                  {product.isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </IconButton>

                <img
                  src={product.product_image}
                  alt={product.product_name}
                  style={{ maxWidth: "70%", height: "auto", marginBottom: "10px" }}
                />
                <Typography variant="body1" sx={{ mt: 1 }}>
                  {product.product_name} <br /> {product.product_qty}<br />
                  <CurrencyRupeeIcon style={{ fontSize: "15px" }}/>
                  {product.product_price}/- 
                </Typography>
                <Box sx={{ marginTop: 2 }}>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={() => handleBuyNow(product)}
                    component={Link}
                    to="/address"
                    sx={{ marginRight: 1 }}
                  >
                    Buy Now
                  </Button>
                  <Button 
                    variant="contained" 
                    color="secondary" 
                    onClick={() => handleAddToCart(product)}
                  >
                    Add Cart
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="body1" sx={{ textAlign: "center" }}>
          No liked products
        </Typography>
      )}
    </Container>
  );
}

export default Favorite;
