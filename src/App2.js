import Navs from './Navs2';
import Caja from './Components/Caja';

import Home from './Components/Home/Home.jsx';
import { ThemeProvider } from '@material-ui/styles'
import theme from './themeconfig'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Hidden } from "@material-ui/core";
import React from 'react'

import Courses from './Components/Home/Coursesold';
import Course from './Components/Classes/Course';
import ActivityPage from './Components/Classes/ActivityPage.jsx';
import Assistance from './Components/Classes/Assistance.jsx';
import NewClass from './Components/Classes/NewClass';
import Login from './Components/Login';



function App() {

  
  const [abrir, setAbrir] = React.useState(false)
  const accionAbrir = () => {
    setAbrir(!abrir)

  }
  return (
    <ThemeProvider theme={theme}>

      <Router>
        <div className="App">
          <Navs accionAbrir={accionAbrir}  />
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
          <Route path="/login" exact component={Login} />
            <Route path="/" exact component={Home} />
            <Route path="/activitypage" exact component={ActivityPage} />
            <Route path="/Course" exact component={Course} />
            <Route path="/Courses" exact component={Courses} />
            <Route path="/assistance" exact component={Assistance} />
            <Route path="/newclass" exact component={NewClass} />
            
          </Switch>

        </div>
      </Router>
    </ThemeProvider>
  );
}


export default App;
