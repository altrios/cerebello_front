import React, { useState } from "react";
import Button from "@material-ui/core/Button";

import MenuIcon from "@material-ui/icons/Menu";
import {
  AppBar,
  
  IconButton,
  Typography,
  Toolbar,
  makeStyles,
  Modal, TextField
} from "@material-ui/core";
import { Link, NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${240}px)`,
      marginLeft: 240,
    },

  },
  modal:{
    position:'absolute',
    with:400,
    background: 'white',
    border:'2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2,4,3),
    top:'50%',
    left:'50%',
    transform: 'translate(-50%, -50%)'

},
textfield:{
    width:'100%'
}
}));

export const Navs = (props) => {
  const classes = useStyles();

  return (
    <div>
      <AppBar className={classes.appBar}>
        <Toolbar className="nav">
          <IconButton aria-label="menu" className={classes.menuButton} onClick={() => props.accionAbrir()}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="initial" className={classes.title}>
            LingoCampus
          </Typography>


          <NavLink
            to="/login"
            exact
            color="inherit"
          >
            <Button ><b>Login</b></Button>
          </NavLink>
         

        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
    </div>
  );
}

export default Navs;
