import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Grid, Typography } from "@material-ui/core/";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: props => props.brandScheme.primaryClr,
    paddingTop: "5px",
    position: "static"
  },
  toolBar: {
    paddingLeft: 0,
    height: "70px"
  },
  gridContainer: {
    height: "100%",
    paddingLeft: "200px",
    paddingRight: "110px"
  },
  gridLogo:{
    height: "100%",
  },
  title:{
    fontSize: '14px',
    fontWeight: 'bold',
    lineHeight: '14px',
    paddingTop: '25px'
  }
}));

export default function GreenBar(props) {
  const classes = useStyles(props);

  const logo = props.brandScheme.logo;

  return (
    <div className={classes.grow}>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          {/* <img
            src={logo}
            alt='green bar'
            style={{ width: "80%", height: "100%", display: "block", margin:"0 auto"}}
          /> */}
          <Grid container className={classes.gridContainer}>
            <Grid item xs={3} className={classes.gridLogo}>
              <img
                src={logo}
                alt="green bar"
                style={{
                  // width: "80%",
                  height: "100%",
                  display: "block",
                  margin: "0 auto"
                }}
              />
            </Grid>
            <Grid item xs={5} >
              <Typography className={classes.title}>Our products and services</Typography>
            </Grid>
            <Grid item xs={2} >
              <Typography className={classes.title}>Cookie Policy</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography className={classes.title}>Your Security</Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
