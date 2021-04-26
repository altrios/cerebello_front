import React from "react";
import { Box, Hidden, makeStyles } from "@material-ui/core";

import Navbar from "./Navbar";
import Caja from "./Caja";
import { Cajita } from "./Cajita";




const estilos = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },

}));

export const Contenedor = () => {
  const classes = estilos();
  const [abrir, setAbrir]=React.useState(false)
const accionAbrir=()=>{
  setAbrir(!abrir)
 
}

  return (
    <div className={classes.root}>
      <Navbar accionAbrir={accionAbrir}/>
      <Hidden xsDown>
        <Caja 
        variant="permanent"
        open={true}
        />
      </Hidden>
      <Hidden smUp>
        <Caja 
        variant="temporary"
        open={abrir}
        onClose={accionAbrir}
        
        />
      </Hidden>
        
       
      <div className={classes.content}>
        <div className={classes.toolbar}></div>
        <Cajita/>
        
      </div>
    </div>
  );
};
