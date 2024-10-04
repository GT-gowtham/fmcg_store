import React from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import img2 from "../../assets/loginimg/welcome1.png";
import img1 from "../../assets/loginimg/HIFI-IT-PARK.png";

const ResponsiveBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

function Signup() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        // bgcolor: "#b8a5fe",
        minHeight: "96.4vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

        padding: 2,
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          bgcolor: "#fff",
          boxShadow: 3,
          borderRadius: 2,
          overflow: "hidden",
          p: 2,
        }}
      >
        <ResponsiveBox sx={{ display: "flex" }}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              p: 2,
            }}
          >
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              fontWeight={"bold"}
              mb={3}
            >
              WelCome !
            </Typography>
            <Typography
              variant="h6"
              align="center"
              gutterBottom
              fontWeight={"bold"}
              mb={1} 
            >
              WelCome to Your Next Opportunity.

            </Typography>
            <Typography variant="body1" align="center" gutterBottom>
              SignUp  to connect with Hi-Fi IT PARK
            </Typography>
            <Grid mt={7} textAlign={"center"}>
              <img
                src={img2}                
                alt="hai"
                style={{
                  margin: "0 auto",
                  width: "100%",
                  maxWidth: 300,
                  height: "auto",
                }}
              />
            </Grid>
            <Link
              to="/contact"
              align="center"
              sx={{ mt: 8, textDecoration: "none" }}
            >
              Contact Us?
            </Link>
          </Grid>
          <Grid item xs={12} md={3} sx={{ p: 2 }}>
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              fontWeight={"bold"}
            >
              Sign Up
            </Typography>
            <Grid textAlign={"center"} mt={5}>
              <TextField
                placeholder="First Name"
                variant="standard"
                sx={{ mb: 2, width: isSmallScreen ? "30vh" : "45vh" }}
                InputProps={{
                  disableUnderline: true,
                  style: {
                    border: "2px solid #ccc",
                    borderRadius: "20px",
                    padding: "10px 20px 10px 20px",
                  },
                }}
              />
            </Grid>
            <Grid textAlign={"center"}>
              <TextField
                placeholder="Last Name"
                variant="standard"
                sx={{ mb: 2, width: isSmallScreen ? "30vh" : "45vh" }}
                InputProps={{
                  disableUnderline: true,
                  style: {
                    border: "2px solid #ccc",
                    borderRadius: "20px",
                    padding: "10px 20px 10px 20px",
                  },
                }}
              />
            </Grid>
            <Grid textAlign={"center"}>
              <TextField
                placeholder="E-mail"
                variant="standard"
                sx={{ mb: 2, width: isSmallScreen ? "30vh" : "45vh" }}
                InputProps={{
                  disableUnderline: true,
                  style: {
                    border: "2px solid #ccc",
                    borderRadius: "20px",
                    padding: "10px 20px 10px 20px",
                  },
                }}
              />
            </Grid>
            <Grid textAlign={"center"}>
              <TextField
                placeholder="Password"
                type="password"
                variant="standard"
                sx={{ mb: 2, width: isSmallScreen ? "30vh" : "45vh" }}
                InputProps={{
                  disableUnderline: true,
                  style: {
                    border: "2px solid #ccc",
                    borderRadius: "20px",
                    padding: "10px 20px 10px 20px",
                  },
                }}
              />
            </Grid>
            <Grid textAlign={"center"}>
              <TextField
                placeholder="Confirm Password"
                type="password"
                variant="standard"
                sx={{ mb: 2, width: isSmallScreen ? "30vh" : "45vh" }}
                InputProps={{
                  disableUnderline: true,
                  style: {
                    border: "2px solid #ccc",
                    borderRadius: "20px",
                    padding: "10px 20px 10px 20px",
                  },
                }}
              />
            </Grid>
            <Typography align="center" sx={{ mb: 2 }} mt={2}>
              Already have an account? <Link to="/login">Login?</Link>
            </Typography>
            <Grid textAlign={"center"} mt={4}>
              <Button
                variant="contained"
                sx={{
                  mb: 5,
                  backgroundColor: "#c5cae9",
                  color: "black",
                  textTransform: "capitalize",
                  padding: "10px 50px 10px 50px ",
                }}
              >
                Signup
              </Button>
            </Grid>
            <Grid textAlign={"center"}>
              <Button
                variant="outlined"
                sx={{
                  textTransform: "capitalize",
                  padding: "10px 50px 10px 50px ",
                }}
              >
                Continue with Google
              </Button>
            </Grid>
          </Grid>
        </ResponsiveBox>
      </Container>
    </Box>
  );
}

export default Signup;
