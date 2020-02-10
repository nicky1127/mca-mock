import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Grid, Paper } from "@material-ui/core";

import AccountSummary from "./AccountSummary";

const useStyles = makeStyles(theme => ({
  wrapper: {
    backgroundColor: "#eee",
    padding: "20px 185px"
  },
  accountBlock: {
  }
}));

export default function WhiteBar() {
  const classes = useStyles();

  const featureBar = "/images/featurebar.png";

  return (
    <div className={classes.grow}>
      <Paper className={classes.wrapper}>
        <Grid container>
          <Grid item xs={3}>
            <img
              src={featureBar}
              alt="feature bar"
              style={{ width: "100%", height: "100%", display: "block" }}
            />
          </Grid>
          <Grid item xs={8}>
            <AccountSummary className={classes.accountBlock} height='180px'/>
            <AccountSummary className={classes.accountBlock} height='180px'/>
            <AccountSummary className={classes.accountBlock} height='180px'/>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
