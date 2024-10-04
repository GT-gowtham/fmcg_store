import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Container, Grid, TextField } from "@mui/material";

function FeedBack() {
  const [value, setValue] = useState(5); // Initial value set for demonstration

  return (
    <Container>
      <Grid
        mt={15}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          sx={{
            p: 5,
            borderRadius: 2,
            boxShadow: "3px 3px 10px 3px gray",
            width: "600px",
          }}
        >
          <Typography
            variant="h3"
            textAlign={"center"}
            fontWeight={"bold"}
            color={"#f9a825"}
          >
            Feedback{" "}
          </Typography>
          <Typography
            variant="h5"
            textAlign={"center"}
            fontWeight={"bold"}
            mt={4}
          >
            {" "}
            Select Rating
          </Typography>{" "}
          <Grid textAlign={"center"} mt={4}>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
            <Grid textAlign={"center"} mt={4}>
              <TextField placeholder="Type your feedback here..." p={"10px"} />
            </Grid>
            <Grid>
              <Button
                variant="contained"
                sx={{ mt: 2, mb: 1, textTransform: "capitalize", mt: 4 }}
                onClick={() => console.log("Ask me later clicked")}
              >
                Ask me later
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Container>
  );
}

export default FeedBack;
