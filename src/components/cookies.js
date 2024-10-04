// CookieBanner.js
import React, { useState, useEffect } from "react";
import { Button, Snackbar, SnackbarContent } from "@mui/material";
import { useCookies } from "react-cookie";

const CookieBanner = () => {
  const [cookies, setCookie] = useCookies(["cookieConsent"]);
  const [open, setOpen] = useState(!cookies.cookieConsent);

  useEffect(() => {
    // When cookies have already been accepted, hide the banner
    setOpen(!cookies.cookieConsent);
  }, [cookies.cookieConsent]);

  const handleAccept = () => {
    setCookie("cookieConsent", "accepted", { path: "/" });
    setOpen(!false); // Close the Snackbar
  };

  return (
    <Snackbar
      open={!open}
      onClose={() => setOpen(false)} // Optional: handle closing on click outside
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <SnackbarContent
        style={{ backgroundColor: "#323232", color: "#fff" }}
        message="We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies."
        action={
          <Button color="inherit" onClick={handleAccept}>
            Accept
          </Button>
        }
      />
    </Snackbar>
  );
};

export default CookieBanner;
