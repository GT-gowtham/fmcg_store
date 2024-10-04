import { Divider, Grid, Typography } from "@mui/material";

export const DividerCOlor = (props) => {
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

export const TypographyStyle = (props) => {
  return (
    <Typography
      style={{
        textDecoration: "underline",
        fontWeight: "bold",
        marginTop: "4vh",
      }}
      {...props}
    >
      {props.children}
    </Typography>
  );
};
