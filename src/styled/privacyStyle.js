import { Typography } from "@mui/material";

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
