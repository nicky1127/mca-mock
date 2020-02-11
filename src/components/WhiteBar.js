import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Grid } from "@material-ui/core";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: "white",
    position: "static"
  },
  toolBar: {
    paddingLeft: 0
  },
  content: {
    paddingLeft: "140px",
    paddingRight: "105px",
    height: "50p"
  },
  customer: {
    marginTop: "5px"
  },
  customerName: {
    fontSize: "19px",
    color: "black"
  },
  logtime: {
    fontSize: "14px",
    color: "gray"
  },
  gridContainer: {
    height: "100%"
  },
  title:{
    fontSize: '14px',
    color: props=>props.brandScheme.primaryClr,
    fontWeight: 'bold',
    paddingTop: '20px'
  }
}));

export default function WhiteBar(props) {
  const classes = useStyles(props);
  const { parsed } = props;
  console.log("parsed", parsed);
  const { firstname, lastname, title } = parsed;
  const customerName = `${title} ${firstname} ${lastname}`;

  const logo = "/images/whitebar.png";

  return (
    <div className={classes.grow}>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <Grid
            container
            justify="center"
            className={classes.content}
            // spacing={5}
          >
            <Grid item xs={5}>
              <Box className={classes.customer}>
                <Typography className={classes.customerName}>
                  {customerName}
                </Typography>
                <Typography className={classes.logtime}>
                  Last logged on 13 January 17 at 04:57 PM
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={2} >
              <Typography className={classes.title}>Your Accounts</Typography>
            </Grid>
            <Grid item xs={2} >
              <Typography className={classes.title}>Your Profile</Typography>
            </Grid>
            <Grid item xs={2} >
              <Typography className={classes.title}>Help Surpport</Typography>
            </Grid>
            <Grid item xs={1} >
              <Typography className={classes.title}>Log off</Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
