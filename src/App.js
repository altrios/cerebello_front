import Navs from './Navs';
import Caja from './Components/Caja';

import Home from './Components/Home/Home.jsx';
import { ThemeProvider } from '@material-ui/styles'
import theme from './themeconfig'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Hidden } from "@material-ui/core";
import React from 'react'
import Courses from './Components/Home/Courses';
import Course from './Components/Classes/Course';
import ActivityPage from './Components/Classes/ActivityPage.jsx';
import Assistance from './Components/Classes/Assistance.jsx';
import NewClass from './Components/Classes/NewClass';
import Perfil from './Components/Perfil/Perfil';
import Login from './Components/Login';
import Logout from './Components/Logout';
import ActivittyView from './Components/Classes/ActivittyView'
import jQuery from 'jquery'
//import FileRegister from './FileRegister';


function App() {

  const [abrir, setAbrir] = React.useState(false)
  const accionAbrir = () => {
    setAbrir(!abrir)

  }
  return (
    <ThemeProvider theme={theme}>

      <Router>
        <div className="App">
          <Navs accionAbrir={accionAbrir} />
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
            {/* <Route path="/fileregister" exact component={FileRegister} /> */}
            <Route path="/" exact component={Home} />
            <Route path="/activitypage" exact component={ActivityPage} />
            <Route path="/Course" exact component={Course} />
            <Route path="/Courses" exact component={Courses} />
            <Route path="/assistance" exact component={Assistance} />
            <Route path="/newclass" exact component={NewClass} />
            <Route path="/perfil" exact component={Perfil} />
            <Route path="/logout" exact component={Logout} />
            <Route path="/activityview" exact component={ActivittyView} />
          </Switch>

        </div>
      </Router>
    </ThemeProvider>
  );
}


export default App;
