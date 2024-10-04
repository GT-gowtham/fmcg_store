import React from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import img3 from "../../assets/loginimg/newlogo.jpeg";
import { Link } from "react-router-dom";

function Forgot() {
  return (
    <Box
      sx={{
        // backgroundColor: "#b8a5fe",
        minHeight: "80.4vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
      }}
    >
      <Container
        maxWidth="xs"
        sx={{
          backgroundColor: "#fff",
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
          textAlign: "center",
        }}
      >
        <Box sx={{ marginBottom: 3 }}>
          {/* <img
            src={img3}
            alt="Logo"
            style={{ height: 160, objectFit: "cover", marginBottom: 16 }}
          /> */}
          <Typography variant="h5" gutterBottom>
            Mail Verification
          </Typography>
          <Typography variant="body2">
            Enter your email and we'll send you a link to reset your Password
          </Typography>
        </Box>
        <TextField
          variant="standard"
          placeholder="Hifiitpark@gmail.com"
          sx={{ marginBottom: 3 }}
          InputProps={{
            disableUnderline: true,
            style: {
              border: "2px solid #ccc",
              borderRadius: "20px",
              padding: "10px 60px 10px 20px",
            },
          }}
        />
        <Grid>
          <Link
            href="./changepassword.html"
            underline="none"
            sx={{
              display: "block",
              marginBottom: 3,
              textDecoration: "underline",
            }}
          >
            Change password
          </Link>
        </Grid>
        <Grid mt={2}>
          <Button
            variant="contained"
            color="success"
            sx={{
              marginBottom: 2,
              textTransform: "capitalize",
              padding: "10px 30px 10px 30px",
            }}
          >
            <Link
              to="/otpp"
              style={{ color: "white", textDecoration: "none" }}
            >
              Verify
            </Link>
          </Button>
        </Grid>
        <Grid>
          <Button style={{ textTransform: "capitalize" }}>
            <Link to="/login">Back to Login</Link>
          </Button>
        </Grid>
      </Container>
    </Box>
  );
}

export default Forgot;
