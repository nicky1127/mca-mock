import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Grid, Paper } from "@material-ui/core";

import AccountSummary from "./AccountSummary";
import SideBar from "./SideBar";

const useStyles = makeStyles(theme => ({
  wrapper: {
    backgroundColor: "#eee",
    padding: "20px 15% 0 15%"
  },
  sideBar:{
  },
  accountBlock: {}
}));

export default function WhiteBar(props) {
  const classes = useStyles();

  const featureBar = "/images/featurebar.png";

  return (
    <div className={classes.grow}>
      <Paper className={classes.wrapper}>
        <Grid container>
          <Grid item xs={3}>
            {/* <img
              src={featureBar}
              alt="feature bar"
              style={{ width: "90%", height: "100%", display: "block" }}
            /> */}
            <SideBar className={classes.sideBar} {...props} />
          </Grid>
          <Grid item xs={9}>
            <AccountSummary
              {...props}
              className={classes.accountBlock}
              height="180px"
              accountType="Class"
              accountNumber="84736475"
              sortCode="39-48-92"
              accountBalance="£ 13,343,456"
            />
            <AccountSummary
              {...props}
              className={classes.accountBlock}
              height="180px"
              accountType="Monthly Saver"
              accountNumber="38475924"
              sortCode="39-48-92"
              accountBalance="£ 343,456"
            />
            <AccountSummary
              {...props}
              className={classes.accountBlock}
              height="180px"
              accountType="Stocks and shares ISA"
              accountNumber="28374932"
              sortCode="39-48-92"
              accountBalance="£ 2,938,456"
            />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
