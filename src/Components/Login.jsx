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

function Login() {
    const styles = useStyles();
    const [user, setUser] = useState();
    const [email, setEmail] = useState();
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
        var userData = JSON.stringify({
            "email": data.example,
            "password": data.exampleRequired
        });
        setState({ ...state, email: data.example })
        console.log(state)
        await axios({
            method: 'post',
            url: 'http://cerebelloback.echilateral.com/api/login',
            headers: {
                'Content-Type': 'application/json'
            },

            data: userData,

        })
            .then(function (response) {
                document.getElementById('menu').style.display = 'block';
                setState({ ...state, name: response.data.data.name })
                setState({ ...state, email: data.example })

                setState({ ...state, nivel: response.data.data.nivel })
                /*console.log(state)*/

                sessionStorage.setItem('token', response.data.data.token);

                if (!state.token) {
                    setState({ ...state, token: sessionStorage.getItem('token') })
                    console.log("token")
                }
                sessionStorage.setItem('name', response.data.data.name);
                sessionStorage.setItem('email', data.example);
                sessionStorage.setItem('nivel', response.data.data.nivel);
                history.push("/");


            })
            .catch(function (error) {
                console.log(error);

            });



    }

    const forgotpass = async data => {

    }
    console.log(state.token)


    return (
        <div className={styles.modal}>



            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid xs={12}>

                    <Box>
                        <div align="center">
                            <h2>Iniciar Sesión </h2>
                            <p>Si no tienes una cuenta, solicita tu registro <Button className={styles.wp} href='https://wa.link/mh4pk9' target="blank"><WhatsAppIcon style={{ fontSize: "1.5em" }} className={styles.wpCenter} />Chat de WhatsApp</Button> </p>
                        </div>
                    </Box>
                    <Grid xs={12}>

                        <TextField ref={email} onChange={() => { setState({ ...state, correo: email.current.value }) }} type="email" {...register("example")} label="Correo" className={styles.textfield} variant="outlined" autoComplete="off" />

                        <br />
                        <TextField type="password" {...register("exampleRequired", { required: true })} label="Contraseña" className={styles.textfield} variant="outlined" autoComplete="off" />
                        {errors.exampleRequired && <span className={styles.Red}>*Completa los campos</span>}
                        <br />
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
export default Login;