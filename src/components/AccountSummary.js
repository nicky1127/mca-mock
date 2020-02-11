import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Grid, Paper } from "@material-ui/core";
import { fontWeight } from "@material-ui/system";

const useStyles = makeStyles(theme => ({
  wrapper: {
    backgroundColor: "#eee",
    // padding: "20px 185px",
    borderTop: props => `5px solid ${props.brandScheme.primaryClr}`,
    margin: "30px 0",
    height: props => props.height
  },
  container: {
    height: "100%"
  },
  accountInfo: {
    boxSizing: "border-box",
    backgroundColor: "#fff",
    padding: "30px",
    height: "100%"
  },
  accountType: {
    color: props => props.brandScheme.primaryClr,
    fontWeight: "bold"
  },
  sortCode: {},
  accountNumber: {},
  accountBalance: {
    fontSize: "30px",
    fontWeight: "bold"
  },
  link: {
    boxSizing: "border-box",
    height: "25%",
    paddingLeft: "20px",
    borderBottom: "1px solid white"
  },
  moreActionLink: {
    backgroundColor: props => props.brandScheme.thirdClr,
    height: "25%",
    paddingLeft: "20px"
  },
  linkTitle: {
    lineHeight: "40px",
    color: props => props.brandScheme.primaryClr,
    fontWeight: "bold"
  },
  moreActionLinkTitle: {
    lineHeight: "40px",
    color: "#fff",
    fontWeight: "bold"
  }
}));

export default function AccountSummary(props) {
  const classes = useStyles(props);

  const { accountType, sortCode, accountNumber, accountBalance } = props;

  return (
    <div className={classes.grow}>
      <Paper className={classes.wrapper}>
        <Grid container className={classes.container}>
          <Grid item xs={8}>
            <Box className={classes.accountInfo}>
              <Grid container>
                <Grid item xs={5}>
                  <Typography className={classes.accountType}>
                    {accountType}
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography className={classes.sortCode}>
                    {sortCode}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography className={classes.accountNumber}>
                    {accountNumber}
                  </Typography>
                </Grid>
              </Grid>
              <Typography className={classes.accountBalance}>
                {accountBalance}
              </Typography>
              <hr />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box className={classes.link}>
              <Typography className={classes.linkTitle}>
                View statement
              </Typography>
            </Box>
            <Box className={classes.link}>
              <Typography className={classes.linkTitle}>
                Payments and transfers
              </Typography>
            </Box>
            <Box className={classes.link}>
              <Typography className={classes.linkTitle}>
                Upgrade account
              </Typography>
            </Box>
            <Box className={classes.moreActionLink}>
              <Typography className={classes.moreActionLinkTitle}>
                More actions
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
