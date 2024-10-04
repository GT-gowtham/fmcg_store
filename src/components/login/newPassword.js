import React from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
// import img1 from "../assets/HIFI-IT-PARK.png";
import img1 from "../../assets/loginimg/HIFI-IT-PARK.png";
import { Link } from "react-router-dom";

function NewPassword() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        minHeight: "85vh",
        // backgroundColor: "#b8a5fe",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: theme.spacing(2),
      }}
    >
      {/* <Box
        component="img"
        src={img1}
        alt="Logo"
        sx={{
          width: isSmallScreen ? "200px" : "280px",
          marginBottom: theme.spacing(4),
        }}
      /> */}
      <Container
        maxWidth="sm"
        sx={{
          backgroundColor: "#fff",
          padding: theme.spacing(4),
          borderRadius: theme.shape.borderRadius,
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography
          mb={5}
          variant="h4"
          component="h2"
          align="center"
          gutterBottom
          fontWeight={"bold"}
        >
          New Password
        </Typography>
        <Grid textAlign={"center"}>
          <TextField
            type="password"
            placeholder="New Password"
            variant="standard"
            required
            sx={{
              marginBottom: theme.spacing(2),
              width: isSmallScreen ? "30vh" : "50vh",
            }}
            InputProps={{
              disableUnderline: true,
              style: {
                border: "2px solid #ccc",
                borderRadius: "20px",
                padding: "10px 60px 10px 20px",
              },
            }}
          />
        </Grid>
        <Grid textAlign={"center"}>
          <TextField
            type="password"
            placeholder="Confirm Password"
            margin="normal"
            variant="standard"
            required
            sx={{
              width: isSmallScreen ? "30vh" : "50vh",
            }}
            InputProps={{
              disableUnderline: true,
              style: {
                border: "2px solid #ccc",
                borderRadius: "20px",
                padding: "10px 60px 10px 20px",
                marginTop: "2vh",
              },
            }}
          />
        </Grid>
        <Grid textAlign={"center"}>
          <Button
            variant="contained"
            color="success"
            sx={{ marginTop: theme.spacing(7), textTransform: "capitalize" }}
          >
            <Link to="/signup" style={{ color: "white" }}>
              Update Password
            </Link>
          </Button>
        </Grid>
        <Button
          fullWidth
          sx={{ marginTop: theme.spacing(6), textTransform: "capitalize" }}
        >
          <Link to="/login">Back to Login</Link>
        </Button>
      </Container>
    </Box>
  );
}

export default NewPassword;
