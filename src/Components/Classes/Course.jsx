import React, { useState, useContext } from "react";
import { Box, Grid, makeStyles, ListItem, Button } from "@material-ui/core";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import { Link, Redirect } from "react-router-dom";
import { Transform } from "@material-ui/icons";
import {AppContext} from "../../Provider"


const useStyles = makeStyles((theme) => ({
    text: {
        textAlign: 'left',
        padding: '10px',
    },
    Title: {
        textAlign: 'center',
        width: '75vw',
        padding: '10px 0 10px 0',
        color: '#117CC3',
        [theme.breakpoints.up('xs')]: {
            width: '70%',
          },
        [theme.breakpoints.up('sm')]: {
            width: '80%',
          },
          [theme.breakpoints.up('md')]: {
            width: '70vw',
          },
          [theme.breakpoints.up('lg')]: {
            width: '75vw',
          }
    },
    activity_box: {
        color: 'black'
    },
    activity_grid: {
        [theme.breakpoints.down('sm')]: {
            display: 'block',
        },
    },
    activity_block: {
        marginLeft:'2vw',
        [theme.breakpoints.up('xs')]: {
            width: '85%',
          },
        [theme.breakpoints.up('sm')]: {
            width: '95%',
          },
          [theme.breakpoints.up('md')]: {
            width: '45%',
          },
          [theme.breakpoints.up('lg')]: {
            width: '30%',
          }
        
    },
    link_style: {
        color: "snow",
    },
    arrowIcon: {
        height: '2em',
        fontSize: '2.5rem',
        [theme.breakpoints.down('sm')]: {
            marginTop: '0vh',
          },
    },
    back: {
        display: 'flex',

    },
    buttonback: {
        marginTop: '6vh',
        position: 'relative',
        float: 'left',
        marginLeft: '2vw',
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
    margin: {
        marginTop: '4vh'
    },
    createAc: {
        position: 'relative',
        float: 'right',
        display: 'block',
        backgroundColor: '#117CC3',
        marginLeft: '3vw',
        '&:hover': {
            background: "#0A598D",
        },
        [theme.breakpoints.up('xs')]: {
            transform: 'translate(-50%, -50%)',
            marginLeft: '0',
          },
        [theme.breakpoints.up('sm')]: {
            transform: 'translate(-88%, -50%)',
            marginLeft: '0vw',
          },
          [theme.breakpoints.up('md')]: {
            transform: 'translate(-138%, -50%)',
            marginLeft: '0vw',
          },
          [theme.breakpoints.up('lg')]: {
            transform: 'translate(-5vw, 0vh)',
          }
    },
    arrowPosition: {
        display: 'block',
        position: 'relative',
        float: 'right',
        marginLeft: '1vw',
        marginTop: '0.5vh',
    },
    textoOculto: {
        width: '100%',
        display: 'block',
        paddingLeft: '0',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',

    },
    inlineCourse: {
        displat: 'flex',
        flexwrap: 'nowrap',
        marginLeft: '1vw'
    },
    coursePosition: {
        display: 'block',
        width: '50vw',
        height: '1vh',

    },
    clasesName: {
        margin: 'auto',
        display: 'block',
        marginTop: '3.5vh',
        [theme.breakpoints.up('sm')]: {
            marginTop: '3vh',
          },
          [theme.breakpoints.up('md')]: {
            marginTop: '2.3vh',
          },
    },
    root: {
        flexGrow: 1,
        
      },
      header: {
          display: 'flex',
      }


}));

export const Course = (props) => {
    const[state, setState]= useContext(AppContext)
    const classes = useStyles();
    const [cohort_id, setCohort_id] = useState();
    const NoAuth = "Acceso no autorizado";
    const [course_activities, setCoursesActivities] = useState([])

    var axios = require('axios');
    React.useEffect(() => {
        var data = '';

        var config = {
            method: 'get',
            url: 'http://cerebelloback.echilateral.com/api/v1/activities',
            headers: {
                'Accept': 'application/vnd.api+json',
                'Content-Type': 'application/vnd.api+json',
                'Authorization': 'Bearer ' + state.token
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                setCoursesActivities(response.data.data)
                setCohort_id(props.location.Activity.id)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);



    
    if (sessionStorage.getItem('Activity') != '' && sessionStorage.getItem('Activity') != { NoAuth } && sessionStorage.getItem('Activity') != null) {
        if (props.location.Activity) {
            sessionStorage.removeItem('Activity');
            
            const prop = [{ algo: props.location.Activity }];
            //let activity = prop[0].algo.activityProps;
            sessionStorage.setItem('Activity', prop[0].algo.activityProps);
            sessionStorage.setItem('IdCourse', props.location.Activity.activityID);
        }

    } else {

        sessionStorage.setItem('Activity', NoAuth);
    }

    

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
    


    
    return (
        <div container className="MuiGrid-grid-xs-12" >
            <div className={classes.margin}>
                <div className={classes.header, classes.root}>
                    <Button className={classes.buttonback}>
                        <Link to={{
                            pathname: '/activitypage'
                        }}>
                            <div className={classes.back}>
                                <ArrowBackIosIcon style={{ color: '#707070' }} />   <h3 style={{ margin: '0', color: '#707070' }}>Volver</h3>
                            </div>
                        </Link>
                    </Button>
                    <div className={classes.Title} >
                        <h1>{window.sessionStorage.getItem('Activity')}</h1>
                    </div>
                    <div id="CreateClass">
                        <Button className={classes.createAc}>
                            <Link to={{
                                pathname: '/newclass',
                                cohort_id: props.location.Activity_id,


                            }
                            }>
                                <div className={classes.back}> <ControlPointIcon style={{ color: 'white' }} /> <h3 style={{ margin: '0 0 0 1vw', color: 'white' }}>Crear Actividad</h3></div>
                            </Link>
                        </Button>
                    </div>
                </div>
                <div  className={classes.root}>
                <Grid container spacing={3} className={classes.activity_grid}>
                    {
                        course_activities.map((data, index) => {


                            if (cohort_id == data.attributes.cohort_id) {
                                return (

                                    <div className={classes.activity_block}>
                                        <div className={classes.text} >

                                            <Grid item xs={12} sm={11} lg={10}>
                                                <Link to={{
                                                    pathname: '/activityview',
                                                    Activity: {
                                                        title: data.attributes.name,
                                                        cohorteID: data.attributes.cohort_id,
                                                        description: data.attributes.description

                                                    }
                                                }
                                                } className={classes.link_style} >

                                                    <Box borderRadius={12} border={1} m={2} p={2} className={classes.activity_box} className="classRoom"
                                                        boxShadow={3}
                                                        borderColor="grey.500"
                                                        width='100%'
                                                    >
                                                        <Grid container xs={9} className={classes.activity_grid, classes.inlineCourse}>
                                                            <Box className={classes.coursePosition}>
                                                                <h2 className={classes.textoOculto, classes.clasesName}>{data.attributes.name}</h2>
                                                            </Box>
                                                        </Grid>
                                                        <Grid container xs={2} className={classes.activity_grid}>
                                                            <Box className={classes.arrowPosition}>
                                                                <ArrowForwardIosIcon className={classes.arrowIcon} />
                                                            </Box>
                                                        </Grid>

                                                    </Box>
                                                </Link>
                                            </Grid>
                                        </div>
                                    </div>
                                )
                            }
                        }
                        )
                    }
                </Grid>
                </div>
                
            </div>
        </div>
    );
               
}

export default Course;