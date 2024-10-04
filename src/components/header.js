import React, { useState } from "react";
import {
  Grid,
  InputAdornment,
  TextField,
  Typography,
  Menu,
  MenuItem,
  useMediaQuery,
  Drawer,
  IconButton,
  List,
  ListItem,
  Badge,
} from "@mui/material";
import Logo from "../assets/hrmslogo.png";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuIcon from "@mui/icons-material/Menu";
import { MainDiv, MainGrid } from "../styled/headerStyle";
import { Link } from "react-router-dom";

const Header = ({ cartItemCount, likedProducts, cartItems }) => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(max-width:960px)"); // Tablet view

  const [anchorEl, setAnchorEl] = useState(null);
  const [fmcg, setFmcg] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleFmcgOpen = (event) => setFmcg(event.currentTarget);
  const handleFmcgClose = () => setFmcg(null);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  const isAnyProductLiked = likedProducts.length > 0;

  const menuItems = [
    <Link to="/" style={{ color: "black" }} key="home">
      HOME
    </Link>,
    "IT PRODUCTS",
    "AUTOMATION",
    "HRMS",
    "ACADEMY",
    "FMCG",
    <Link to="/about" style={{ color: "black" }} key="about">
      ABOUT US
    </Link>,
    <Link to="/contact" style={{ color: "black" }} key="contact">
      CONTACT US
    </Link>,

    
  ];

  return (
    <MainDiv>
      <MainGrid />
      <Grid container mt={2} alignItems="center">
        <Grid
          item
          lg={3}
          xs={7}
          display="flex"
          justifyContent={isTablet ? "" : "space-around"}
        >
          <img src={Logo} width={isTablet ? "150px" : "200px"} alt="Logo" />
        </Grid>
        {(isMobile || isTablet) && (
          <Grid item xs={4} display="flex" justifyContent="end">
            <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          </Grid>
        )}
        <Grid item lg={7} xs={8} display={isTablet ? "flex" : "block"}>
          <TextField
            hiddenLabel
            defaultValue="Search"
            variant="standard"
            InputProps={{
              style: {
                width: isMobile ? "25vh" : isTablet ? "40vh" : "100vh",
                border: "2px solid #e0e0e0",
                borderRadius: "50px",
                padding: "5px 20px",
                margin: isMobile ? "35px 20px 5px 20px" : "",
                marginTop: isTablet ? "30px" : "",
              },
              disableUnderline: true,
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid
          item
          lg={0.5}
          xs={1.3}
          marginTop={isMobile || isTablet ? "3vh" : ""}
        >
          <Link to="/login">
            <PersonIcon />
          </Link>
        </Grid>
        <Grid
          item
          lg={0.5}
          xs={1.3}
          marginTop={isMobile || isTablet ? "3vh" : ""}
        >
          <IconButton>
            <Link to="/favorite" state={{ likedProducts: likedProducts }}>
              <FavoriteIcon sx={{ cursor: "pointer", color: "red" }} />
            </Link>
          </IconButton>
        </Grid>
        <Grid
          item
          lg={0.5}
          xs={1}
          marginTop={isMobile || isTablet ? "3vh" : ""}
        >
          <IconButton>
            <Badge
              badgeContent={cartItemCount}
              sx={{
                "& .MuiBadge-badge": {
                  color: "#fff",
                  backgroundColor: "#550A35",
                },
              }}
            >
              <Link
                to="/product"
                state={{
                  cartItems: cartItems,
                }}
              >
                <ShoppingCartOutlinedIcon />
              </Link>
            </Badge>
          </IconButton>
        </Grid>

        <Drawer anchor="top" open={drawerOpen} onClose={toggleDrawer(false)}>
          <List sx={{ width: 250 }}>
            {menuItems.map((item, index) => (
              <ListItem button key={index}>
                <Grid item lg={1}>
                  <Typography
                    fontWeight="bold"
                    onMouseEnter={
                      item === "IT PRODUCTS"
                        ? handleMenuOpen
                        : item === "FMCG"
                        ? handleFmcgOpen
                        : undefined
                    }
                    onClick={
                      item === "IT PRODUCTS"
                        ? handleMenuOpen
                        : item === "FMCG"
                        ? handleFmcgOpen
                        : undefined
                    }
                    sx={{ cursor: "pointer" }}
                  >
                    {item}
                  </Typography>
                  {item === "IT PRODUCTS" && (
                    <Menu
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleMenuClose}
                      MenuListProps={{ onMouseLeave: handleMenuClose }}
                    >
                      <MenuItem onClick={handleMenuClose}>IT Service</MenuItem>
                      <MenuItem onClick={handleMenuClose}>Automation</MenuItem>
                      <MenuItem onClick={handleMenuClose}>FMCG</MenuItem>
                      <MenuItem onClick={handleMenuClose}>
                        HRMS Service
                      </MenuItem>
                      <MenuItem onClick={handleMenuClose}>
                        Acodemy Courses
                      </MenuItem>
                    </Menu>
                  )}
                  {item === "FMCG" && (
                    <Menu
                      anchorEl={fmcg}
                      open={Boolean(fmcg)}
                      onClose={handleFmcgClose}
                      MenuListProps={{ onMouseLeave: handleFmcgClose }}
                    >
                      <MenuItem onClick={handleFmcgClose}><Link to="/" style={{color:"black"}}>HomeCare</Link></MenuItem>
                      <MenuItem onClick={handleFmcgClose}>
                       <Link to="/underconstruction" style={{color:"black"}}>Personal Care</Link> 
                      </MenuItem>
                      <MenuItem onClick={handleFmcgClose}>
                       <Link to="/underconstruction" style={{color:"black"}}> Automobile Care</Link>
                      </MenuItem>
                    </Menu>
                  )}
                </Grid>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Grid>
      {!isMobile && !isTablet && (
        <Grid container justifyContent="center" alignItems="center" mt={6}>
          {menuItems.map((item, index) => (
            <Grid item lg={1} key={index}>
              <Typography
                fontWeight="bold"
                textAlign="center"
                onMouseEnter={
                  item === "IT PRODUCTS"
                    ? handleMenuOpen
                    : item === "FMCG"
                    ? handleFmcgOpen
                    : undefined
                }
                onClick={
                  item === "IT PRODUCTS"
                    ? handleMenuOpen
                    : item === "FMCG"
                    ? handleFmcgOpen
                    : undefined
                }
                sx={{ cursor: "pointer" }}
              >
                {item}
              </Typography>
              {item === "IT PRODUCTS" && (
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                  MenuListProps={{ onMouseLeave: handleMenuClose }}
                >
                  <MenuItem onClick={handleMenuClose}>IT Service</MenuItem>
                  <MenuItem onClick={handleMenuClose}>Automation</MenuItem>
                  <MenuItem onClick={handleMenuClose}>FMCG</MenuItem>
                  <MenuItem onClick={handleMenuClose}>HRMS Service</MenuItem>
                  <MenuItem onClick={handleMenuClose}>Academy Courses</MenuItem>
                </Menu>
              )}
              {item === "FMCG" && (
                <Menu
                  anchorEl={fmcg}
                  open={Boolean(fmcg)}
                  onClose={handleFmcgClose}
                  MenuListProps={{ onMouseLeave: handleFmcgClose }}
                >
                  <MenuItem onClick={handleFmcgClose}><Link to="/" style={{color:"black"}}>HomeCare</Link></MenuItem>
                  <MenuItem onClick={handleFmcgClose}><Link to="/underconstruction" style={{color:"black"}}>Personal Care</Link></MenuItem>
                  <MenuItem onClick={handleFmcgClose}><Link to="/underconstruction" style={{color:"black"}}>Automobile Care</Link></MenuItem>
                </Menu>
              )}
            </Grid>
          ))}
        </Grid>
      )}
    </MainDiv>
  );
};

export default Header;
