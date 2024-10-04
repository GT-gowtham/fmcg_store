import { Divider, Grid, Typography } from "@mui/material";

export const DividerColor = (props) => {
  return (
    <Divider
      style={{
        backgroundColor: "black",
      }}
      {...props}
    >
      {props.children}
    </Divider>
  );
};
export const MainGrid = (props) => {
  return (
    <Grid
      style={{
        padding: "20px 0 20px 0",
        display: "flex",
      }}
      {...props}
    >
      {props.children}
    </Grid>
  );
};
export const TypographyStyle = (props) => {
  return (
    <Typography
      style={{
        textDecoration: "underline",
        fontWeight: "bold",
        marginTop: "4vh",
        color: "red",
      }}
      {...props}
    >
      {props.children}
    </Typography>
  );
};
