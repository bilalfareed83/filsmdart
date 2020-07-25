import React from "react";
import { makeStyles, withTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import InfoIcon from "@material-ui/icons/Info";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 9999,
    width: "100%",
    height: 50,
    // background-color: #00a087
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    opacity: 0.7,
    // fontSize: 18,
  },
  nav: {
    backgroundColor: "#ffffff",
    color: "#1c2833;",
  },
  text: {
    // fontSize: 17,
    opacity: 0.7,
  },
}));

const ButtonAppBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.nav}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Films d'art
          </Typography>
          <Button color="inherit" className={classes.text}>
            About
          </Button>
          <Button color="inherit" className={classes.text}>
            Our Films
          </Button>
          <Button color="inherit" className={classes.text}>
            What we do
          </Button>
          <Button color="inherit" className={classes.text}>
            Contact us
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default ButtonAppBar;
