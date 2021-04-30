import React, { useState } from "react";
import { Box, Grid, makeStyles, ListItem, Button } from "@material-ui/core";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import { Link } from "react-router-dom";
import { Transform } from "@material-ui/icons";


const useStyles = makeStyles((theme) => ({
    text: {
        textAlign: 'left',
        padding: '10px',
    },
    Title: {
        textAlign: 'center',
        width: '75vw',
        padding: '10px',
        color: '#117CC3',
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
        color: 'black',
        [theme.breakpoints.up('sm')]: {
            width: '100%',
        },
        [theme.breakpoints.up('xl')]: {
            width: '33%'
        },
    },
    link_style: {
        color: "snow",
    },
    arrowIcon: {
        height: '2em',
        fontSize: '2.5rem'
    },
    back: {
        display: 'flex',

    },
    buttonback: {
        marginTop: '6vh',
        position: 'relative',
        float: 'left',
        marginLeft: '2vw'
    },
    margin: {
        marginTop: '4vh'
    },
    createAc: {
        position: 'relative',
        float: 'right',
        display: 'block',
        transform: 'translate(7vw, -4vh)',
        backgroundColor: '#117CC3',
        '&:hover': {
            background: "#0A598D",
        }
    },
    arrowPosition: {
        display: 'block',
        position: 'relative',
        float: 'right',
        marginLeft: '2vw',
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

    },


}));

export const Course = (props) => {
    const NoAuth = "Acceso no autorizado";
    const [course_activities, setCoursesActivities] = useState([])

    var axios = require('axios');
    React.useEffect(() => {
        var data = JSON.stringify({
            "data": {
                "type": "activities",
                "attributes": {
                    "cohort_id": 1,
                    "name": "The resistance",
                    "description": "aaaa",
                    "start_date": "2021-04-30",
                    "end_date": null,
                    "has_end": 0,
                    "is_active": 1,
                    "is_evaluated": 0,
                    "state_id": 1,
                    "createdAt": "2021-04-01T00:00:00.000000Z",
                    "updatedAt": "2021-04-01T00:00:00.000000Z"
                }
            }
        });

        var config = {
            method: 'get',
            url: 'http://cerebelloback.echilateral.com/api/v1/activities',
            headers: {
                'Accept': 'application/vnd.api+json',
                'Content-Type': 'application/vnd.api+json',
                'Authorization': 'Bearer ' + sessionStorage.getItem('token')
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                if (response.data.included[0].id == props.location.Activity.id) {
                    setCoursesActivities(response.data.data)
                }
                console.log(response.data.included[0].id)
                console.log(props.location)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);




    if (sessionStorage.getItem('Activity') != '' && sessionStorage.getItem('Activity') != { NoAuth } && sessionStorage.getItem('Activity') != null) {
        if (props.location.Activity) {
            sessionStorage.removeItem('Activity');
            console.log(props.location.Activity.activityID)
            const prop = [{ algo: props.location.Activity }];
            //let activity = prop[0].algo.activityProps;
            sessionStorage.setItem('Activity', prop[0].algo.activityProps);
            sessionStorage.setItem('IdCourse', props.location.Activity.activityID);
        }

    } else {

        sessionStorage.setItem('Activity', NoAuth);
    }




    const classes = useStyles();
    return (
        <div className="MuiGrid-grid-xs-12">
            <div className={classes.margin}>
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
                    <Button className={classes.createAc}>
                        <Link to={{
                            pathname: '/newclass',
                            courseID: sessionStorage.getItem('IdCourse')

                        }
                        }>
                            <div className={classes.back}> <ControlPointIcon style={{ color: 'white' }} /> <h3 style={{ margin: '0 0 0 1vw', color: 'white' }}>Crear Actividad</h3></div>
                        </Link>
                    </Button>
                </div>

                <Grid container xs={12} className={classes.activity_grid}>
                    {
                        course_activities.map((data, index) => {

                            return (

                                <div className={classes.activity_block}>
                                    <div className={classes.text} >

                                        <Grid xs={10} >
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
                        )
                    }
                </Grid>
            </div>
        </div >
    );
}

export default Course;