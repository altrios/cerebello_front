import React from "react";
import {Button,Divider} from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import { ThemeProvider } from "@material-ui/styles";
import MenuIcon from "@material-ui/icons/Menu";
import {
  AppBar,
  Icon,
  IconButton,
  Typography,
  Toolbar,
  makeStyles,
  Divider,
} from "@material-ui/core";

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
}));
export const Navbar = (props) => {
  const classes = useStyles();
  return (
    <div>
      <AppBar className={classes.appBar}>
        <Toolbar color="nav">
          <IconButton aria-label="menu" className={classes.menuButton} onClick={()=>props.accionAbrir()}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="initial" className={classes.title}>
            toolbar
          </Typography>

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
      <Divider/>
    </div>
  );
};

export default Navbar;
