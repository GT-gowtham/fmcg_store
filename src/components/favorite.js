import React from "react";
import { Grid, Typography, Box, Container, Button, IconButton } from "@mui/material";
import { Link } from 'react-router-dom';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Favorite({ likedProducts, onAddToCart, onLikeToggle }) {

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
    if (onLikeToggle) {
      onLikeToggle(product);
    } else {
      console.error('onLikeToggle function is not passed as a prop.');
    }
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
                  src={product.image}
                  alt={product.name}
                  style={{ maxWidth: "70%", height: "auto", marginBottom: "10px" }}
                />
                <Typography variant="body1" sx={{ mt: 1 }}>
                  {product.name} <br />ML: {product.ml}<br />
                  <CurrencyRupeeIcon style={{ fontSize: "15px" }}/>
                  {product.price}/- 
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
