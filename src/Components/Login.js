import { Modal,TextField, makeStyles } from "@material-ui/core";
import React, {useState} from 'react';
import Button from "@material-ui/core/Button";


const useStyles=makeStyles((theme)=>({
    modal:{
        position:'absolute',
        with:400,
        background: 'white',
        border:'2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2,4,3),
        top:'50%',
        left:'50%',
        transform: 'translate(-50%, -50%)'

    },
    textfield:{
        width:'100%'
    }
}))

function Login(){
    const styles=useStyles();
    const body=(
        <div className={styles.modal}>
            <div align="center">
                <h2>Login</h2>
            </div>
            <TextField label="Correo" className={styles.textfield}/>
            <br/>
            <TextField label="Contraseña" className={styles.textfield}/>
            <br/>
            <div>
                <Button color="primary">Enviar</Button>
                <Button> Cancelar</Button>
            </div>

        </div>
    )
}
export default Login;