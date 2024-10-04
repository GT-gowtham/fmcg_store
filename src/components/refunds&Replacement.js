import {
  Breadcrumbs,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import DoneIcon from "@mui/icons-material/Done";
import { DividerColor, MainGrid, TypographyStyle } from "../styled/refundStyle";

const RefundsReplacement = () => {
  return (
    <div>
      <Container>
        <Grid mt={7}>
          <Typography variant="h4" fontWeight={"bold"}>
            Refunds & Replacement
          </Typography>
          <Breadcrumbs aria-label="breadcrumb" separator="›">
            <Typography color="inherit" href="/">
              Home Page
            </Typography>
            <Typography>Refunds & Replacement</Typography>
          </Breadcrumbs>
          <MainGrid>
            <DoneIcon style={{ color: "red" }} />
            <Typography>
              All products sold at www.hifiitpark.com are covered under our 3
              Day Replacement Guarantee. Please do notify us on any problems,
              damages or defects within 3 days from the date of delivery, and we
              will issue a brand new replacement product to you at no extra
              cost. In order to get a defective item replaced please do Contact
              Customer Care via the Contact Us Page which you can see at the
              bottom of hifiitpark.com web page or call us on 8754309295 / 0461-
              2001483 Monday to Saturday 9.30am to 7.30 pm IST, within 3 days
              from the date of delivery. The defective product or part will be
              recalled and a replacement will be shipped immediately. If there
              is any cosmetic damage we will not replace the product. However if
              there is any other concern you can still get in touch with us.
            </Typography>
          </MainGrid>
          <DividerColor />
          <MainGrid>
            <DoneIcon style={{ color: "red" }} />
            <Typography>
              During the replacement process the product that is being returned
              should contain all original packaging and accessories, including
              the retail box, manuals, cables, and all other items originally
              included with the product at the time of delivery.
            </Typography>
          </MainGrid>
          <DividerColor />
          <MainGrid>
            <DoneIcon style={{ color: "red" }} />
            <Typography>
              Product without a valid, readable, untampered serial number,
              including but not limited to products with missing, damaged,
              altered, or otherwise unreadable serial number will not be
              eligible for replacement.
            </Typography>
          </MainGrid>
          <DividerColor />
          <MainGrid>
            <DoneIcon style={{ color: "red" }} />
            <Typography>
              All Electronics are Insured against theft and damages incurred
              during transit. If you receive a package that is open or looks to
              have been tampered with, do not accept it. Contact Hi-Fi IT Park
              Customer Care on 8754309295 / 0461- 2001483 Monday to Saturday 9am
              to 9pm IST, and we will have the issue quickly resolved.
            </Typography>
          </MainGrid>
          <DividerColor />
          <MainGrid>
            <DoneIcon style={{ color: "red" }} />
            <Typography>
              For orders placed through Gift Coupons /vouchers, refund would be
              provided in form of a fresh Gift Coupons /voucher of the same
              value and the Expiry date will be the same as in the original gift
              coupons.
            </Typography>
          </MainGrid>
          <DividerColor />
          <MainGrid>
            <DoneIcon style={{ color: "red" }} />
            <Typography>
              It may take up to 7-10 working days to complete the refund from
              the time we have received our product back. Though we give free
              shipping during the cancel and refund the shipping charge will be
              detected from the refund amount. If the order is cancelled before
              shipping there will not be any shipping charge detected on the
              refund funds, In case if the payment was done through COD, It will
              take longer. As soon as we receive the funds from the courier we
              will process the refund. You need to provide us the below
              mentioned information.
            </Typography>
          </MainGrid>
          <li style={{ marginLeft: "5vh" }}>Name as on Account</li>
          <li style={{ marginLeft: "5vh" }}>Name of Bank</li>
          <li style={{ marginLeft: "5vh" }}>Account number</li>
          <li style={{ marginLeft: "5vh" }}>IFSC Coder</li>
          <li style={{ marginLeft: "5vh" }}>
            Order Number and reason for Refund
          </li>
          <Typography mt={2}>
            We will either transfer the funds through to your account or we will
            provide you with the cheque under the billing address name.
          </Typography>
          <TypographyStyle>
            Terms and Condition for Cancellation :
          </TypographyStyle>
          <Typography mt={2} mb={2}>
            If you cancel your order before your product has been shipped, we
            will refund the entire amount. If the cancellation is after your
            product has been shipped,
          </Typography>
          <li style={{ marginLeft: "5vh" }}>
            If your product has shipped but has not yet been delivered, contact
            Customer Support and inform them of the same.
          </li>
          <li style={{ marginLeft: "5vh" }}>
            If you received the product, it will only be eligible for
            replacement, only in cases where there are defects found with the
            product.
          </li>
          <li style={{ marginLeft: "5vh" }}>
            When the product is been delivered by courier and the customer does
            not accept the package, The 2 way shipment charge will be collected
            from the Customer.
          </li>
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

export default RefundsReplacement;
