import { Divider, Grid } from "@mui/material";

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
