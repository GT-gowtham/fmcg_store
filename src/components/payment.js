import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  Container,
  Fade,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
  useMediaQuery,
  Box,
} from "@mui/material";
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CodIcon from "../assets/cod.png"; // Cash on Delivery icon
import GpayIcon from "../assets/gpay.webp"; // Google Pay icon
import PhonePayIcon from "../assets/phonepay.png"; // PhonePe icon
import Online from "../assets/online.jpg"; // Online Delivery icon
import { Link } from 'react-router-dom';

const Payment = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [deliveryType, setDeliveryType] = useState("Cash on Delivery");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [expanded, setExpanded] = useState(false);
  const [orderMessage, setOrderMessage] = useState('');

  

  const handlePayment = (event) => {
    setPaymentMethod(event.target.value); // Update state with the selected payment method
  };

  const handleDeliveryChange = (event) => {
    setDeliveryType(event.target.value); // Update state with the selected delivery type
    setPaymentMethod(""); // Clear payment method when delivery type changes
  };

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  const getButtonText = () => {
    if (
      deliveryType === "Online Delivery" &&
      (paymentMethod === "Gpay" || paymentMethod === "Phone pay")
    ) {
      return "Pay Now";
    }
    return "Place Order";
  };

  const placeOrder = () => {
    // Trigger the order placement logic here
    setOrderMessage("Your order has been placed successfully!");

    // Clear the message after 3 seconds
    setTimeout(() => {
      setOrderMessage("");
    }, 3000); // 3000ms = 3 seconds
  };

  

  return (
    <div>
      <Container>
        <Grid
          container
          spacing={6}
          display="flex"
          justifyContent="center"
          alignItems="center"
          direction="column"
        >
          <Grid item xs={12} display="flex" justifyContent="center" mt={10}>
            <Typography variant="h4" style={{ fontWeight: "bold" }}>
              Select Payment Method
            </Typography>
          </Grid>
          <Grid item style={{ paddingLeft: isMobile ? "30px" : "" }}>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Cash on Delivery"
                name="radio-buttons-group"
                onChange={handleDeliveryChange}
              >
                <Grid m={2} mt={7}>
                  <Card
                    elevation={3}
                    sx={{
                      width: isMobile ? "350px" : "500px",
                      padding: 2,
                      backgroundColor: "#f0f0f0",
                    }}
                  >
                    <FormControlLabel
                      value="Cash on Delivery"
                      control={<Radio />}
                      label={
                        <Box
                          display="flex"
                          justifyContent="space-between"
                          width="100%"
                        >
                          <span>Cash on Delivery</span>
                          <img
                            src={CodIcon}
                            alt="Cash on Delivery"
                            style={{
                              width: "24px",
                              paddingLeft: "15px",
                            }}
                          />
                        </Box>
                      }
                    />
                  </Card>
                </Grid>
                <Grid m={2}>
                  <Card
                    elevation={3}
                    sx={{
                      width: isMobile ? "350px" : "500px",
                      padding: 2,
                      backgroundColor: "#f0f0f0",
                    }}
                  >
                    <FormControlLabel
                      value="Online Delivery"
                      control={<Radio />}
                      label={
                        <Box
                          display="flex"
                          justifyContent="space-between"
                          width="100%"
                        >
                          <span>Online Delivery</span>
                          <img
                            src={Online}
                            alt="Online Delivery"
                            style={{
                              width: "24px",
                              paddingLeft: "15px",
                            }}
                          />
                        </Box>
                      }
                    />
                    {deliveryType === "Online Delivery" && (
                      <>
                        <Accordion
                          expanded={expanded}
                          onChange={handleExpansion}
                          TransitionProps={{ timeout: 400 }}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                          >
                            <Typography>UPI</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Grid>
                              <FormControl>
                                <RadioGroup
                                  aria-labelledby="demo-radio-buttons-group-label"
                                  onChange={handlePayment}
                                  name="radio-buttons-group"
                                >
                                  <FormControlLabel
                                    value="Phone pay"
                                    control={<Radio />}
                                    label={
                                      <Box
                                        display="flex"
                                        justifyContent="space-between"
                                        width="100%"
                                      >
                                        <span>Phone pay</span>
                                        <img
                                          src={PhonePayIcon}
                                          alt="Phone pay"
                                          style={{
                                            width: "34px",
                                            paddingLeft: "10px",
                                          }}
                                        />
                                      </Box>
                                    }
                                  />
                                  <FormControlLabel
                                    value="Gpay"
                                    control={<Radio />}
                                    label={
                                      <Box
                                        display="flex"
                                        justifyContent="space-between"
                                        width="100%"
                                      >
                                        <span>Gpay</span>
                                        <img
                                          src={GpayIcon}
                                          alt="Gpay"
                                          style={{
                                            width: "34px",
                                            paddingLeft: "10px",
                                          }}
                                        />
                                      </Box>
                                    }
                                  />
                                </RadioGroup>
                              </FormControl>
                            </Grid>
                          </AccordionDetails>
                        </Accordion>
                        <Accordion>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                          >
                            <Typography>Wallet</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Grid>
                              <FormControl>
                                <RadioGroup
                                  aria-labelledby="demo-radio-buttons-group-label"
                                  onChange={handlePayment}
                                  name="radio-buttons-group"
                                >
                                  <FormControlLabel
                                    value="Phone pay"
                                    control={<Radio />}
                                    label={
                                      <Box
                                        display="flex"
                                        justifyContent="space-between"
                                        width="100%"
                                      >
                                        <span>Phone pay</span>
                                        <img
                                          src={PhonePayIcon}
                                          alt="Phone pay"
                                          style={{
                                            width: "34px",
                                            paddingLeft: "10px",
                                          }}
                                        />
                                      </Box>
                                    }
                                  />
                                  <FormControlLabel
                                    value="Gpay"
                                    control={<Radio />}
                                    label={
                                      <Box
                                        display="flex"
                                        justifyContent="space-between"
                                        width="100%"
                                      >
                                        <span>Gpay</span>
                                        <img
                                          src={GpayIcon}
                                          alt="Gpay"
                                          style={{
                                            width: "34px",
                                            paddingLeft: "10px",
                                          }}
                                        />
                                      </Box>
                                    }
                                  />
                                </RadioGroup>
                              </FormControl>
                            </Grid>
                          </AccordionDetails>
                        </Accordion>
                      </>
                    )}
                  </Card>
                </Grid>
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item>
            <Button
              style={{ textTransform: "capitalize", marginTop: "5vh" }}
              variant="contained"
              onClick={placeOrder}
            >
              <Link to="/orderConfirm">
              {getButtonText()}</Link>
            </Button>
            {orderMessage && (
              <Typography variant="h6" color="green" mt={2}>
                {orderMessage}
              </Typography>
            )}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Payment;
