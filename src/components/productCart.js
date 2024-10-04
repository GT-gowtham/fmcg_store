import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Box,
  Typography,
  Container,
  Grid,
  Button,
  IconButton,
} from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const ProductCart = ({ cartItems, handleRemoveItem }) => {
  const [quantities, setQuantities] = useState(
    cartItems.reduce((acc, item) => {
      acc[item.id] = 1; // Set initial quantity to 1 for each item
      return acc;
    }, {})
  );

  const handleQuantityChange = (itemId, delta) => {
    setQuantities((prevQuantities) => {
      const newQuantities = { ...prevQuantities };
      newQuantities[itemId] = Math.max(1, newQuantities[itemId] + delta); // Ensure quantity is at least 1
      return newQuantities;
    });
  };

  return (
    <Container>
      <Grid mt={10}>
        <Typography
          style={{ textAlign: "center", fontWeight: "bold" }}
          variant="h4"
        >
          Product Details
        </Typography>
        <Box>
          <List>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <ListItem
                  key={item.id} // assuming each item has a unique `id`
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: 1,
                    border: "1px solid #e0e0e0",
                    margin: 1,
                  }}
                >
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.name}
                    sx={{
                      maxWidth: 250,
                      height: 250,
                      objectFit: "cover",
                      marginRight: 2,
                    }}
                  />

                  <ListItemText
                    primary={item.name}
                    secondary={
                      <span>
                        Price: <CurrencyRupeeIcon sx={{ fontSize: 16 }} />{" "}
                        {item.price * quantities[item.id]}
                        <Typography>
                          Qty: {quantities[item.id]}
                        </Typography>
                      </span>
                    }
                  />

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      height: "100%", // Adjust this to match the image height
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <IconButton
                        color="primary"
                        onClick={() => handleQuantityChange(item.id, -1)}
                        disabled={quantities[item.id] === 1}
                      >
                        <RemoveIcon />
                      </IconButton>
                      <Typography>{quantities[item.id]}</Typography>
                      <IconButton
                        color="primary"
                        onClick={() => handleQuantityChange(item.id, 1)}
                      >
                        <AddIcon />
                      </IconButton>
                    </Box>
                    <Button
                      variant="contained"
                      color="secondary"
                      sx={{ alignSelf: "flex-start", marginTop: 1 }}
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      Remove
                    </Button>
                  </Box>
                </ListItem>
              ))
            ) : (
              <Typography variant="body2" textAlign="center" mt={2}>
                No items in cart
              </Typography>
            )}
          </List>
        </Box>
      </Grid>
    </Container>
  );
};

export default ProductCart;
