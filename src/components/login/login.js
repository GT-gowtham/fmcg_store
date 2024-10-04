import React from "react";
import {
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { FaGoogle } from "react-icons/fa";
// import img1 from "../assets/loginimg/HIFI-IT-PARK.png";
import img1 from "../../assets/loginimg/HIFI-IT-PARK.png";
import img2 from "../../assets/loginimg/welcome1.png";
import { Link, RouterLink } from "react-router-dom";
import Forgot from "./forgot";

function Login() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ py: 4, minHeight: "92.8vh" }}>
      <Box sx={{ textAlign: "center", mb: 12, mt: 5 }}></Box>

      <Grid container justifyContent="center">
        <Grid
          item
          xs={11}
          sm={11}
          md={6}
          lg={5}
          border={"3px solid gray"}
          borderRadius={"10px"}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: isSmallScreen ? "column" : "row",
              backgroundColor: "#fff",
              borderRadius: "10px",
              boxShadow: 3,
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                flex: 1,
                borderRight: isSmallScreen ? "none" : "1px solid #000",
                borderBottom: isSmallScreen ? "1px solid #000" : "none",
                textAlign: "center",
                p: 3,
              }}
            >
              <Typography variant="h4" gutterBottom>
                Welcome Back !
              </Typography>
              <Typography variant="h6" gutterBottom>
                Welcome to your next opportunity.
              </Typography>
              <Typography variant="body1">
                Log in to connect with UserName & Password 
              </Typography>
              <Box mt={4}>
                <img
                  src={img2}
                  alt="Welcome"
                  style={{ width: "80%", height: "auto" }}
                />
              </Box>
            </Box>

            <Box sx={{ flex: 1, p: 3 }}>
              <Typography variant="h4" align="center" gutterBottom>
                Login Form
              </Typography>
              <TextField
                fullWidth
                label="Username"
                variant="outlined"
                sx={{ mb: 3 }}
              />
              <TextField
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                sx={{ mb: 3 }}
              />

              <Box sx={{ textAlign: "center", mb: 2 }}>
                <Link
                  to="/forgot" // Adjust the route as needed
                  color="primary" // Optional: Set link color if needed
                >
                  Forgot Password?
                </Link>
                {/* <Link to={Forgot}>Forgot Password?</Link> */}
              </Box>

              <Button
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mb: 2, bgcolor: "#b8a5fe" }}
              >
             <Link to="/" style={{color:"black"}}> Login</Link>  
              </Button>

              <Box sx={{ textAlign: "center", mb: 2 }}>
                <Typography variant="body2">
                  Don't have an account? <Link to="/signup">Signup</Link>
                </Typography>
              </Box>

              <Button
                fullWidth
                variant="outlined"
                startIcon={<FaGoogle />}
                sx={{ mt: 2 }}
              >
                Continue with Google
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Login;
