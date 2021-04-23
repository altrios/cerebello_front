import { TextField, makeStyles, Grid, Box } from "@material-ui/core";
import React, { useState } from 'react';
import Button from "@material-ui/core/Button";
import { useForm } from "react-hook-form";
import { Link, Redirect } from "react-router-dom";



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
        padding:'5px'
    }
}))

function Login() {
    const styles = useStyles();
    const [user, setUser] = useState([]);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        setUser(data)
        login();

    }
    

    const login = async () => {
        var axios = require('axios');
        console.log(user.example)
        var data = JSON.stringify({
            "email": user.example,
            "password": user.exampleRequired
        });

        var config = {
            method: 'post',
            url: 'http://cerebelloback.echilateral.com/api/login',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(response.data.data);
                sessionStorage.setItem('token',response.data.data.token);
                <Redirect push  to='/' />;
                console.log("redirect")
            })
            .catch(function (error) {
                console.log(error);
            });

    }


    if (sessionStorage.getItem("token") !== null) {

        return <Redirect to='/' />;
    } else {
    return (
        <div className={styles.modal}>



            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid xs={12}>
                    <Box>
                        <div align="center">
                            <h2>Iniciar Sesión</h2>
                            <p>Si no tienes una cuenta, solicita tu registro en <b>info@lingoyesacademy.com.co</b></p>
                        </div>
                    </Box>
                    <Grid xs={12}>
                    
                        <TextField type="email" {...register("example")} label="Correo" className={styles.textfield} variant="outlined" autoComplete="off"/>
                        
                        <br />
                        <TextField type="password" {...register("exampleRequired", { required: true })} label="Contraseña" className={styles.textfield} variant="outlined" autoComplete="off"/>
                        {errors.exampleRequired && <span>Completa los campos</span>}
                        <br />
                    </Grid>
                    <div>
                        <Button type="submit" color="primary">Enviar</Button>
                        <Button> Cancelar</Button>
                    </div>
                </Grid>
            </form>
        </div>)
    }
}
export default Login;