import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Grid, Paper } from "@material-ui/core";
import { fontWeight } from "@material-ui/system";

const useStyles = makeStyles(theme => ({
  wrapper: {
    backgroundColor: "#eee",
    // padding: "20px 185px",
    borderTop: "5px solid #006A4D",
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
    color: "#006A4D",
    fontWeight: "bold"
  },
  sortCode: {},
  accountNumber: {},
  accountBalance: {
    fontSize: '30px',
    fontWeight: 'bold'
  },
  link: {
    boxSizing: "border-box",
    height: "25%",
    paddingLeft: "20px",
    borderBottom: "1px solid white"
  },
  moreActionLink: {
    backgroundColor: "#699B10",
    height: "25%",
    paddingLeft: "20px"
  },
  linkTitle: {
    lineHeight: "40px",
    color: "#006A4D",
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

  return (
    <div className={classes.grow}>
      <Paper className={classes.wrapper}>
        <Grid container className={classes.container}>
          <Grid item xs={8}>
            <Box className={classes.accountInfo}>
              <Grid container>
                <Grid item xs={2}>
                  <Typography className={classes.accountType}>
                    Classic
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography className={classes.sortCode}>58-49-59</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography className={classes.accountNumber}>
                    84758374
                  </Typography>
                </Grid>
              </Grid>
              <Typography className={classes.accountBalance}>
                £ 2,030,495
              </Typography>
              <hr/>
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
