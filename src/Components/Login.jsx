import { TextField, makeStyles, Grid, Box } from "@material-ui/core";
import React, { useState } from 'react';
import Button from "@material-ui/core/Button";
import { useForm } from "react-hook-form";
import { Link, Redirect } from "react-router-dom";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';



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
        color:'red',
    },
    buttonSend:{
        backgroundColor: '#117CC3',
        border: '1px solid #117CC3',
        color: 'white',
        margin: 8,
    },
    buttonCancel:{
        border: '1px solid #117CC3',
        margin: 5,
    },
    wp: {
        padding: '0.5vw',
        backgroundColor:'#25D366',
        color: 'white',
    },
    wpCenter: {
        marginRight: '3px',
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
                sessionStorage.setItem('name',response.data.data.name);
                <Redirect from="/login" to="/perfil"/>
                window.location.reload(); 
                
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



            <form onSubmit={handleSubmit(onSubmit) }>
                <Grid xs={12}>
                    <Box>
                        <div align="center">
                            <h2>Iniciar Sesión</h2>
                            <p>Si no tienes una cuenta, solicita tu registro <Button className={styles.wp} href='https://wa.link/mh4pk9' target="blank"><WhatsAppIcon style={{fontSize:"1.5em"}} className={styles.wpCenter}/>Chat de WhatsApp</Button> </p>
                        </div>
                    </Box>
                    <Grid xs={12}>
                    
                        <TextField type="email" {...register("example")} label="Correo" className={styles.textfield} variant="outlined" autoComplete="off"/>
                        
                        <br />
                        <TextField type="password" {...register("exampleRequired", { required: true })} label="Contraseña" className={styles.textfield} variant="outlined" autoComplete="off"/>
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
}
export default Login;