import { Grid, Box, makeStyles, Button, Link } from '@material-ui/core'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import React, {useContext} from 'react'
import { useHistory } from "react-router-dom";
import {AppContext} from "../../Provider"

const useStyles = makeStyles((theme) => ({
    description: {
        whiteSpace: 'pre'
    },
    cajaTitle: {
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
        [theme.breakpoints.up('md')]: {
            width: '100%',
        },
        [theme.breakpoints.up('lg')]: {
            width: '100%',
        }
    },
    title: {
        color: '#23d9b7',
        textAlign: 'center',
    },
    cajaDes: {
        width: '100%',
    },
    cajaMargen: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    buttonback: {
        marginTop: '6vh',
        position: 'relative',
        float: 'left',
        marginLeft: '2vw',
        zIndex: '999',
        [theme.breakpoints.down('xs')]: {

        },
        [theme.breakpoints.down('sm')]: {
            marginTop: '0vh',
        },
        [theme.breakpoints.up('md')]: {
            marginTop: '0vh',
        },
        [theme.breakpoints.up('lg')]: {

        }
    },
    back: {
        display: 'flex',

    },
}))

function ActivittyView(props) {
    const[state, setState]= useContext(AppContext)
    if (state.nivel != "admin" && state.nivel != "teacher") {
        console.log("hola")
        setTimeout(
            function() {
                document.getElementById('CreateClass').innerHTML =null;
            }
            .bind(this),
            5
          );
        //document.getElementById('createClass').innerHTML ='';
    } else {
       //luego veo que le coloco aca
        //console.log("hola")
    }
    const classes = useStyles()
    let history = useHistory();
    let title = ''
    let description = ''
    if (props.location.Activity) {
        sessionStorage.setItem('title', props.location.Activity.title)
        sessionStorage.setItem('description', props.location.Activity.description)
        title = sessionStorage.getItem('title')
        description = sessionStorage.getItem('description')
        console.log("aca")
    } else if (sessionStorage.getItem('title')) {
        title = sessionStorage.getItem('title')
        description = sessionStorage.getItem('description')
    }
    const deleteClass = () => {
        var axios = require('axios');
        

        var config = {
            method: 'delete',
            url: 'http://cerebelloback.echilateral.com/api/v1/activities/'+props.location.Activity.data.id,
            headers: {
                'Accept': 'application/vnd.api+json',
                'Content-Type': 'application/vnd.api+json',
                'Authorization': 'Bearer ' + sessionStorage.getItem('token')
            },
           
        };

        axios(config)
            .then(function (response) {
                console.log("se borró")
                history.push("/activitypage");
            })
            .catch(function (error) {

                console.log(error);
            });
    }
    return (
        <div className="App">

            <Grid item xs={12} sm={11} lg={10}><Box>
                <Button
                    onClick={deleteClass}
                    id='CreateClass '
                >
                    Eliminar Clase
                </Button >
            </Box>
                <Box className={classes.cajaTitle}>
                    <h1 className={classes.title}>{title}</h1>
                </Box>
                <Box className={classes.cajaDes}>
                    <div className={classes.cajaMargen}>

                        <div dangerouslySetInnerHTML={{ __html: description }} />
                    </div>

                </Box>
            </Grid>
        </div>
    )
}
export default ActivittyView;