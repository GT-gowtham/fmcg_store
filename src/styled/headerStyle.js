import { Divider, Grid } from "@mui/material";

export const MainDiv = (props) => {
  return (
    <div
      style={{
        position: "sticky",
        zIndex: 1,
        top: 0,
        backgroundColor: "white",
      }}
      {...props}
    >
      {props.children}
    </div>
  );
};
export const MainGrid = (props) => {
  return (
    <Grid
      style={{
        backgroundColor: "white",
        height: "5vh",
        width: "auto",
      }}
      {...props}
    >
      {props.children}
    </Grid>
  );
};
