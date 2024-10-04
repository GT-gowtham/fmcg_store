import { Breadcrumbs, Container, Grid, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { DividerCOlor, MainGrid } from "../styled/shippingStyle";

const ShippingPolicy = () => {
  return (
    <div>
      <Container>
        <Grid mt={7}>
          <Typography variant="h4" fontWeight={"bold"}>
            Shipping Policy
          </Typography>
          <Breadcrumbs aria-label="breadcrumb" separator="›">
            <Typography color="inherit" href="/">
              Home Page
            </Typography>
            <Typography>Shipping Policy</Typography>
          </Breadcrumbs>
          <MainGrid mt={7}>
            <ArrowForwardIcon style={{ color: "red" }} />
            <Typography>
              We offer FREE Shipping on all order through www.hifiitpark.com for
              eligible locations
            </Typography>
          </MainGrid>
          <DividerCOlor />
          <MainGrid>
            <ArrowForwardIcon style={{ color: "red" }} />
            <Typography>
              Each order may be shipped only to a single destination address
              specified at the time of payment for that order. If you wish to
              ship products to different addresses, you shall need to place
              multiple orders.
            </Typography>
          </MainGrid>
          <DividerCOlor />
          <MainGrid>
            <ArrowForwardIcon style={{ color: "red" }} />
            <Typography>
              We make our best efforts to ship each item in your order within
              2-5 working days of the order. For other states, we may take 4 - 7
              working days to ship the order.
            </Typography>
          </MainGrid>
          <DividerCOlor />
          <MainGrid>
            <ArrowForwardIcon style={{ color: "red" }} />
            <Typography>
              We ship on all week days (Monday to Saturday), excluding public
              holidays.
            </Typography>
          </MainGrid>
          <DividerCOlor />
          <MainGrid>
            <ArrowForwardIcon style={{ color: "red" }} />
            <Typography>
              To ensure that your order reaches you in the fastest time and in
              good condition, we only ship through reputed courier agencies.
            </Typography>
          </MainGrid>
          <DividerCOlor />
          <MainGrid>
            <ArrowForwardIcon style={{ color: "red" }} />
            <Typography>
              While we shall strive to ship all items in your order together,
              this may not always be possible due to product characteristics, or
              availability.
            </Typography>
          </MainGrid>
          <DividerCOlor />
          <MainGrid>
            <ArrowForwardIcon style={{ color: "red" }} />
            <Typography>
              If you believe that the product is not in good condition, or if
              the packaging is tampered with or damaged, before accepting
              delivery of the goods, please refuse to take delivery of the
              package, and call our Customer Care mentioning your order
              reference number. We shall make our best efforts to ensure that a
              replacement delivery is made to you at the earliest.
            </Typography>
          </MainGrid>
          <DividerCOlor />
          <MainGrid>
            <ArrowForwardIcon style={{ color: "red" }} />
            <Typography>
              You may track the shipping status of your order by the tracking
              Order ID / Billing No.
            </Typography>
          </MainGrid>
          <DividerCOlor />

          <MainGrid>
            <ArrowForwardIcon style={{ color: "red" }} />
            <Typography>
              Please note all items will be shipped with an invoice mentioning
              the price, as per Indian Tax Regulations.​
            </Typography>
          </MainGrid>
          <DividerCOlor />
        </Grid>
        <Grid>
          <Typography
            variant="h6"
            fontWeight={"bold"}
            textAlign={"center"}
            mt={"15vh"}
          >
            GET THE LATEST DEALS
          </Typography>
          <Typography textAlign={"center"} variant="body1" mb={"15vh"}>
            Our best promotions sent to your inbox.
          </Typography>
        </Grid>
      </Container>
    </div>
  );
};

export default ShippingPolicy;
