import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: props => props.brandScheme.primaryClr,
    marginRight: "20px",
    marginTop: "40px"
  },
  topItem: {
    height: "85px",
    fontSize: '15px',
    fontWeight:'bold',
    color: "#fff",
    textAlign: "center",
    lineHeight: " 85px",
    border: "1px solid #ccc"
  },

  item: {
    height: "60px",
    fontSize: '15px',
    fontWeight:'bold',
    color: "#fff",
    textAlign: "center",
    lineHeight: " 60px",
    border: "1px solid #ccc"
  }
}));

export default function WhiteBar(props) {
  const classes = useStyles(props);

  return (
    <div className={classes.grow}>
      <Box className={classes.container}>
      <Box className={classes.topItem}>OUR PRODUCTS AND SERVICES</Box>
        <Box className={classes.item}>FEATURED</Box>
        <Box className={classes.item}>SAVINGS &amp; INVESTMENTS</Box>
        <Box className={classes.item}>LOANS &amp; CAR FINANCE</Box>
        <Box className={classes.item}>BANK ACCOUNTs</Box>
        <Box className={classes.item}>UPGRADE BANK ACCOUNT</Box>
        <Box className={classes.item}>CREDIT CARDS</Box>
        <Box className={classes.item}>OVERDRAFTS</Box>
        <Box className={classes.item}>INSURANCE</Box>
        <Box className={classes.item}>FINANCIAL PLANNING</Box>
        <Box className={classes.item}>MORTGAGES</Box>
      </Box>
    </div>
  );
}
