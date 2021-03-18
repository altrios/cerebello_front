import Navs from './Navs';
import Caja from './Components/Caja';
import About from './Components/About';
import Shop from './Components/Shop';
import Home from './Components/Home';
import {ThemeProvider} from '@material-ui/styles'
import theme from './themeconfig'
import './App.css';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import { Box, Hidden, makeStyles } from "@material-ui/core";
import React from 'react'

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

function App() {
  const classes = estilos();
  const [abrir, setAbrir] = React.useState(false)
  const accionAbrir = () => {
    setAbrir(!abrir)

  }
  return (
    <ThemeProvider theme={theme}>
     
    <Router>
      <div className="App">
        <Navs accionAbrir={accionAbrir}/>
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
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/shop" exact component={Shop}/>
        <Route path="/about" component={About}/>
        </Switch>
        
      </div>
    </Router>
    </ThemeProvider>
  );
}


export default App;
