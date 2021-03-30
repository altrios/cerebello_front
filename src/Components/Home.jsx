import React from "react";
import Banner from "./Banner";
import Activities from "./Activities";
import { makeStyles,   Grid } from "@material-ui/core";



const useStyles = makeStyles(() => ({
  Container: {
    width: '100%',
    padding: '5px'
  }

}));

function Home() {
  localStorage.removeItem('Activity');
  const classes = useStyles();
  return (
    <div className="App">
      <Grid container className={classes.Container}>
        <Grid container  xs={12}>

          <Banner />
        </Grid>

        <Grid container  xs={12}><Activities /></Grid>
      </Grid>


    </div>
  );
}


export default Home;
