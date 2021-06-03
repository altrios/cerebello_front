import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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

  textfield: {
    width: '100%'
  }
}));

export const Navs = (props) => {
  const classes = useStyles();
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(!modal);
  }
  const body = (
    <div className={classes.modal}>
      <div align="center">
        <h2>Login</h2>
      </div>
      <TextField label="Correo" className={classes.textfield} />
      <br />
      <TextField type="password" label="Contraseña" className={classes.textfield} />
      <br />
      <div>
        <Button color="primary" type="submit">Enviar</Button>
        <Button onClick={() => openModal()}> Cancelar</Button>
      </div>

    </div>
  )
  return (
    <div>
 
      <AppBar className={classes.appBar}>
        <Toolbar className="nav">
          <IconButton aria-label="menu" className={classes.menuButton} onClick={() => props.accionAbrir()}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="initial" className={classes.title}>
            toolbar
          </Typography>
          <NavLink
            to="/login"
            exact
            color="inherit"
          >
            <Button ><b>Login</b></Button>
          </NavLink>
          <Modal
            open={modal}
            onClose={openModal}>
            {body}

          </Modal>

        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
   
    </div>
  );
}

export default Navs;
