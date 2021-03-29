import Navs from './Navs';
import Caja from './Components/Caja.jsx';
import About from './Components/About.jsx';
import Shop from './Components/Shop.jsx';
import Home from './Components/Home.jsx';
import {ThemeProvider} from '@material-ui/styles'
import theme from './themeconfig'
import './App.css';
import { BrowserRouter as Router,  Switch, Route } from 'react-router-dom';
import { Hidden } from "@material-ui/core";
import React from 'react'
import { Activity } from './Components/Activity';



function App() {
  
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
        <Route path="/shop"  component={Shop}/>
        <Route path="/about" component={About}/>
        <Route path="/activity" component={Activity}/>
        </Switch>
        
      </div>
    </Router>
    </ThemeProvider>
  );
}


export default App;
