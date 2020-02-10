import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Grid } from "@material-ui/core";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: "white",
    position: "static",
  },
  toolBar: {
    paddingLeft: 0
  },
  content:{
      paddingLeft:'185px',
      paddingRight:'165px',
      height: '50p'
  },
  customer:{
marginTop:'5px'
  },
  customerName:{
      fontSize: '19px',
    color:'black'
},
  logtime:{
    fontSize: '14px',
      color:'gray'
  }
}));

export default function WhiteBar() {
  const classes = useStyles();

  const logo = "/images/whitebar.png";

  return (
    <div className={classes.grow}>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <Grid container justify='center' className={classes.content} spacing={5}>
            <Grid item xs={6}>
              <Box className={classes.customer}>
                <Typography className={classes.customerName}>Mr A Customer</Typography>
                <Typography className={classes.logtime}>
                  Last logged on 13 January 17 at 04:57 PM
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <img
                src={logo}
                alt="green bar"
                style={{ width: "100%", height: "100%", display: "block"}}
              />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
