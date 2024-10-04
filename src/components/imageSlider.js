import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import Camera from "../assets/camera.png";
import Products from "../assets/products.png";
import Laptop from "../assets/laptop.png";
import { styled } from "@mui/system";

const ImageSlider = () => {
  const items = [
    {
      imageUrl: Laptop,
      name: "Laptop",
    },
    {
      imageUrl: Products,
      name: "Products",
    },
    {
      imageUrl: Camera,
      name: "Camera",
    },
  ];

  return (
    <Carousel
      autoPlay={true}
      interval={5000}
      animation="slide"
      sx={{ zIndex: -1, position: "sticky" }}
    >
      {items.map((item, index) => (
        <StyledPaper elevation={0} key={index}>
          <StyledImage src={item.imageUrl} alt={item.name} />
        </StyledPaper>
      ))}
    </Carousel>
  );
};

// Styled components for Paper and Image with keyframe animation
const StyledPaper = styled(Paper)({
  position: "relative",
  overflow: "hidden",
});

const StyledImage = styled("img")({
  width: "100%",
  height: "60vh",
  animation: "zoomIn 10s ease-in-out infinite",
  transformOrigin: "center",

  "@keyframes zoomIn": {
    "0%": {
      transform: "scale(1)",
    },
    "100%": {
      transform: "scale(0.7)", // Slightly zoomed in
    },
  },
});

export default ImageSlider;
