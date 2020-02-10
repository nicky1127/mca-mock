import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: "#006A4D",
    paddingTop:'5px',
    position: "static",
  },
  toolBar: {
    paddingLeft: 0,
    height: "70px"
  }
}));

export default function GreenBar() {
  const classes = useStyles();

  const logo = "/images/greenbar.png";

  return (
    <div className={classes.grow}>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <img
            src={logo}
            alt='green bar'
            style={{ width: "80%", height: "100%", display: "block", margin:"0 auto"}}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}
