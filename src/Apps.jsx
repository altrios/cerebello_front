import React from 'react';
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete';
import { Icon, IconButton, Typography } from '@material-ui/core';
import {ThemeProvider} from '@material-ui/styles'
import theme from './themeconfig'
import Navbar from './Components/Navbar';
import { Lista } from './Components/Lista';
import { Oculto } from './Components/Oculto';
import { Contenedor } from './Components/Contenedor';




function App() {
  return (
    <ThemeProvider theme={theme}>
      <Contenedor/>
     {/*--<Navbar/>--
      
      <Icon>power_setting</Icon>
      <DeleteIcon/>
      <Icon></Icon>
      <Button variant="text" color="primary">
        color
      </Button>
     <Button color="primary">
       presionar
     </Button>
     <Button color="primary"
     variant="contained"
     color="primary"
     endIcon={<DeleteIcon/>}
     >
       borrar
     </Button>
     <IconButton aria-label="" variant="contained"
     color="primary">
     <DeleteIcon/>
     </IconButton>
     <Lista/>
     <Oculto/>
     <Typography variant="h1" color="initial" align="right">qweqwe</Typography>*/}
</ThemeProvider>
    
    
    
  );
}

export default App;
