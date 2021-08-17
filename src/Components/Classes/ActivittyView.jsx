import { Grid, Box, makeStyles, Button, Link } from '@material-ui/core'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import React, { useContext, useState } from 'react'
import { useHistory } from "react-router-dom";
import { AppContext } from "../../Provider"

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
    const [students, setSutents] = useState([])
    const [studentsname, setSutentsname] = useState([]);
    const [stdent, setStdent] = useState([])
    const [teacher, setTeacher] = useState([])
    const [stdentid, setStdentid] = useState([])
    const [state, setState] = useContext(AppContext)
    if (state.nivel != "admin" && state.nivel != "teacher") {

        setTimeout(
            function () {
                document.getElementById('CreateClass').innerHTML = null;
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
    let activityID=''
    let cohortID=''
    if (props.location.Activity) {
        activityID=props.location.Activity.data.id
        cohortID=props.location.Activity.cohort_id
        console.log(props.location)
        sessionStorage.setItem('title', props.location.Activity.title)
        sessionStorage.setItem('description', props.location.Activity.description)
        title = sessionStorage.getItem('title')
        description = sessionStorage.getItem('description')

    } else if (sessionStorage.getItem('title')) {
        title = sessionStorage.getItem('title')
        description = sessionStorage.getItem('description')
    }
    const deleteClass = () => {
        var axios = require('axios');


        var config = {
            method: 'delete',
            url: 'http://cerebelloback.echilateral.com/api/v1/activities/' + props.location.Activity.data.id,
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

    //asistencias

    const asistio = (studentDataID) => {
        var axios = require('axios');
console.log(studentDataID)
        var config = {
          method: 'get',
          url: 'http://cerebelloback.echilateral.com/api/v1/cohorts/'+cohortID,
          headers: { 
            'Accept': 'application/vnd.api+json', 
            'Content-Type': 'application/vnd.api+json', 
            'Authorization': 'Bearer ' + state.token
          }
        };
        
        axios(config)
        .then(function (response) {
            setTeacher(response.data.data.relationships.teacher.data.id)
          console.log(response.data.data.relationships.teacher.data.id);
        })
        .catch(function (error) {
          console.log(error);
        });
        



        var data = JSON.stringify({
            "data": {
                "type": "activity_assistences",
                "attributes": {
                    "activity_id": activityID,
                    "student_id": studentDataID,
                    "teacher_id": teacher,
                    "is_present": 1,
                    "createdAt": "2021-04-02T00:00:00.000000Z",
                    "updatedAt": "2021-04-02T00:00:00.000000Z"
                }
            }
        });

        var config = {
            method: 'post',
            url: 'http://cerebelloback.echilateral.com/api/v1/activity_assistences',
            headers: {
                'Accept': 'application/vnd.api+json',
                'Content-Type': 'application/vnd.api+json',
                'Authorization': 'Bearer ' + state.token
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(data)
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(data)
                console.log(error);
            });

    }
    const asistencia = () => {

        var axios = require('axios');

        var config = {
            method: 'get',
            url: 'http://cerebelloback.echilateral.com/api/v1/students',
            headers: {
                'Accept': 'application/vnd.api+json',
                'Content-Type': 'application/vnd.api+json',
                'Authorization': 'Bearer ' + state.token
            }
        };

        axios(config)
            .then(function (response) {
                setSutents(response.data.data)
                setStdent(response.data.included)
                console.log(response)



            })
            .catch(function (error) {
                console.log(state.token)
                console.log(error);
            });

    }




    //fin asistencia
    return (
        <div className="App">

            <Grid item xs={12} sm={11} lg={10}>
                <Box>
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
                <Box>
                    <Button
                        onClick={asistencia}
                        id='CreateClass'
                    >
                        Asistencia
                    </Button >
                </Box>
                <Box>
                    {
                        students.map((datas, index) => {

                            if (datas.relationships.cohorts.data[0].id == props.location.Activity.cohorteID) {

                                //console.log(datas)
                                return (
                                    <div>
                                        <Grid>
                                            <Box>
                                                <span>{datas.attributes.user_name}</span><Button
                                                    onClick={()=>asistio(datas.id)}
                                                    
                                                >
                                                    Asistió
                                                </Button >
                                            </Box>
                                            <Box>



                                            </Box>
                                        </Grid>
                                    </div>
                                )
                            }

                        })

                    }



                </Box>
            </Grid>
        </div>
    )
}
export default ActivittyView;