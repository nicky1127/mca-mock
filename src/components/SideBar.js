import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: props => props.brandScheme.primaryClr,
    marginRight: "30px"
  },

  item: {
    height: "50px",
    fontSize: '15px',
    fontWeight:'bold',
    color: "#fff",
    textAlign: "center",
    lineHeight: " 50px",
    border: "1px solid #ccc"
  }
}));

export default function WhiteBar(props) {
  const classes = useStyles(props);

  return (
    <div className={classes.grow}>
      <Box className={classes.container}>
        <Box className={classes.item}>FEATURED</Box>
        <Box className={classes.item}>SAVINGS &amp; INVESTMENTS</Box>
        <Box className={classes.item}>LOANS &amp; CAR FINANCE</Box>
        <Box className={classes.item}>BANK ACCOUNTs</Box>
        <Box className={classes.item}>SAVINGS INVESTMENTS</Box>
        <Box className={classes.item}>SAVINGS INVESTMENTS</Box>
        <Box className={classes.item}>SAVINGS INVESTMENTS</Box>
        <Box className={classes.item}>SAVINGS INVESTMENTS</Box>
        <Box className={classes.item}>SAVINGS INVESTMENTS</Box>
        <Box className={classes.item}>SAVINGS INVESTMENTS</Box>
      </Box>
    </div>
  );
}