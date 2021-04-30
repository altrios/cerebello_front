import React, { useState } from 'react';
import { TextField, makeStyles, Grid, Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import axios from 'axios'
import SentimentVerySatisfiedOutlinedIcon from '@material-ui/icons/SentimentVerySatisfiedOutlined';

const useStyles = makeStyles((theme) => ({

  Container: {
    display: 'block',
    color: 'rgba(0, 0, 0, 0.2)',
    marginTop: '16vh',
  },
  textfield: {
    width: '100%',
    marginBottom: '10px',
  },
  Red: {
    color: 'red',
  },
  buttonSend: {
    backgroundColor: '#117CC3',
    border: '1px solid #117CC3',
    color: 'white',
    margin: 8,
  },
  buttonCancel: {
    border: '1px solid #117CC3',
    margin: 5,
  },
  wp: {
    padding: '0.5vw',
    backgroundColor: '#25D366',
    color: 'white',
  },
  wpCenter: {
    marginRight: '3px',
  }

}));

function Perfil() {
  const styles = useStyles();
  const [user, setUser] = useState([]);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    var axios = require('axios');
    var userdata = JSON.stringify({
      "email": sessionStorage.getItem('email'),
      "oldPassword": data.password,
      "newPassword": data.newpassword
    });
    var config = {
      method: 'post',
      url: 'http://cerebelloback.echilateral.com/api/change_password',
      headers: {
        'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: userdata
    };
    sessionStorage.removetItem('title')
    sessionStorage.removetItem('description')


    axios(config)
      .then(function (response) {
        console.log(response);

        /*<Redirect from="/perfil" to="/" />
        window.location.reload();*/

      })
      .catch(function (error) {
        console.log(error);
      });
  }



  return (
    <div className={styles.modal}>
      <form onSubmit={handleSubmit(onSubmit)} className="App">

        <Grid xs={12}>
          {/*<Box>
            <div align="center">
              <h2>Iniciar Sesión</h2>
              <p>Si no tienes una cuenta, solicita tu registro <Button className={styles.wp} href='https://wa.link/mh4pk9' target="blank"><WhatsAppIcon style={{ fontSize: "1.5em" }} className={styles.wpCenter} />Chat de WhatsApp</Button> </p>
            </div>
          </Box> */}

          <Grid xs={12}>



            <br />
            <TextField type="password" {...register("password", { required: true })} label="Contraseña" className={styles.textfield} variant="outlined" autoComplete="off" />
            <TextField type="password" {...register("newpassword", { required: true })} label="Nueva Contraseña" className={styles.textfield} variant="outlined" autoComplete="off" />
            {errors.exampleRequired && <span className={styles.Red}>*Completa los campos</span>}
            <br />
          </Grid>
          <div>
            <Button type="submit" className={styles.buttonSend}>Enviar</Button>
            <Button className={styles.buttonCancel}> Cancelar</Button>
          </div>
        </Grid>
      </form>
    </div>)
}


export default Perfil;
