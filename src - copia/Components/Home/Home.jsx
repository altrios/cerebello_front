import React from "react";
import Banner from "./Banner";
import Courses from "./Courses";
import { makeStyles,   Grid } from "@material-ui/core";



const useStyles = makeStyles(() => ({
  Container: {
    width: '100%',
    padding: '5px'
  }

}));

function Home() {
  sessionStorage.removeItem('Activity');
  const classes = useStyles();
  return (
    <div className="App">
      <Grid container className={classes.Container}>
        <Grid container  xs={12}>

          <Banner />
        </Grid>

        <Grid container  xs={12}><Courses /></Grid>
      </Grid>


    </div>
  );
}


export default Home;
