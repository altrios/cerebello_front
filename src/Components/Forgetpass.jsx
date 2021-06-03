import { TextField, makeStyles, Grid, Box } from "@material-ui/core";
import React, { useState, useContext } from 'react';
import Button from "@material-ui/core/Button";
import { useForm } from "react-hook-form";
import { Link, Redirect } from "react-router-dom";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { useHistory } from "react-router-dom";
import { AppContext } from "../Provider"



const useStyles = makeStyles((theme) => ({
    modal: {
        [theme.breakpoints.up('sm')]: {

            marginLeft: 100,
        },
        position: 'absolute',

        padding: theme.spacing(2, 4, 3),
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'

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
}))

function Forgetpass() {
    const styles = useStyles();
    const [user, setUser] = useState();
    const [email, setEmail] = useState();
    const [token, setToken] = useState();
    const [pass, setPass] = useState();
    const [confPass, setConfPass] = useState();
    let history = useHistory();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    setTimeout(
        function () {
            //document.getElementById('username').innerHTML = '';
        }
            .bind(this),
        5
    );




    const [state, setState] = useContext(AppContext)
    const onSubmit = async data => {

        var axios = require('axios');
        
        console.log(data )
        if (data.token == undefined) {
            var data = JSON.stringify({
                "email": data.email,
            });
            var config = {
                method: 'post',
                url: 'http://cerebelloback.echilateral.com/api/forgot_password',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                data: data
            };

            axios(config)
                .then(function (response) {
                    console.log(JSON.stringify(response.data));
                    //history.push("/login");
                })
                .catch(function (error) {
                    console.log(error);
                });

        } else {
            var data = JSON.stringify({
                "email": data.email,
                "token": data.token,
                "password": data.pass,
                "c_password": data.confPass
            });

            var config = {
                method: 'post',
                url: 'http://cerebelloback.echilateral.com/api/reset_password',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                data: data
            };

            axios(config)
                .then(function (response) {
                    console.log(JSON.stringify(response.data));
                    console.log("se cambio la clave con exito")
                })
                .catch(function (error) {
                    console.log(error);
                });
        }



    }




    return (
        <div className={styles.modal}>



            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid xs={12}>

                    <Box>
                        <div align="center">
                            <h2>Iniciar Sesión </h2>
                            <b>Si no tienes el token introduce unicamente tu correo electronico </b>
                        </div>
                    </Box>
                    <Grid xs={12}>

                        <TextField ref={email} onChange={() => { setState({ ...state, correo: email.current.value }) }} type="email" {...register("email")} label="Correo" className={styles.textfield} variant="outlined" autoComplete="off" />
                        <TextField ref={token} {...register("token")} label="token" className={styles.textfield} variant="outlined" autoComplete="off" />
                        <TextField ref={pass}  type="password" {...register("pass")} label="Contraseña" className={styles.textfield} variant="outlined" autoComplete="off" />
                        <TextField ref={confPass}  type="password" {...register("confPass")} label="Repetir Contraseña" className={styles.textfield} variant="outlined" autoComplete="off" />


                    </Grid>
                    <div>
                        <Button type="submit" className={styles.buttonSend}>Enviar</Button>
                        <Link
                            to="/forgetpass"
                        >
                            <Button className={styles.buttonCancel}> ¿Olvidaste tu contraseña?</Button>
                        </Link>

                    </div>
                </Grid>
            </form>
        </div>
    )

}
export default Forgetpass;