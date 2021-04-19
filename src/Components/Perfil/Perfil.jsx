import React from 'react';
import { Grid, makeStyles } from "@material-ui/core";
import SentimentVerySatisfiedOutlinedIcon from '@material-ui/icons/SentimentVerySatisfiedOutlined';

const useStyles = makeStyles((theme) => ({
 
  Container:{
    display: 'block',
    color: 'rgba(0, 0, 0, 0.2)',
    marginTop: '16vh',
  }

}));

function Perfil() {
    const classes = useStyles();
    return (
      <div className="App">
        <Grid container className={classes.Container}>
            <h1>Ups, Estamos trabajando en esto</h1>
            <SentimentVerySatisfiedOutlinedIcon  style={{fontSize: '20vw', color:'rgba(0, 0, 0, 0.2)'}}/>
        </Grid>
      </div>
    )
  }
  
  export default Perfil;
