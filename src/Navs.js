import React from "react";
import Button from "@material-ui/core/Button";
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
} from "@material-ui/core";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link,
} from "react-router-dom";

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

export const Navs = (props) => {
    const classes = useStyles();
    return (
        <div>
      <AppBar className={classes.appBar}>
        <Toolbar className="nav">
          <IconButton aria-label="menu" className={classes.menuButton} onClick={()=>props.accionAbrir()}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="initial" className={classes.title}>
            toolbar
          </Typography>
          
          <Link className="button-login" to="/shop">
          <Button color="inherit">Login</Button>
          </Link>
          
        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
    </div>
    );
}

export default Navs;
