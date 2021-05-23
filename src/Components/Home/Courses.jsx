import React, { useState } from "react";
import { Box, Grid, makeStyles, ListItem, Button } from "@material-ui/core";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link, Redirect } from "react-router-dom";

import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    text: {
        textAlign: 'left',
        padding: '10px',
    },
    Title: {
        textAlign: 'left',
        fontSize: '1.5rem',
        padding: '5px',
        marginLeft: '2%',
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
        marginLeft:'2vw',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
          },
        [theme.breakpoints.down('sm')]: {
            width: '80%',
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
        fontSize: '2.5rem'
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
        marginTop: '2vh',

    },
    clasesDescription: {
        margin: '0',
    },
    bold: {
        fontWeight: 'bold',
    }

}));


export const Courses = (props) => {
    const [courses, setCourses] = useState([]);
    React.useEffect(() => {
        obtenerDatos()
        
        setTimeout(
            function () {
                if (sessionStorage.getItem('name') !== null) {
                    document.getElementById('username').innerHTML = '<b>' + sessionStorage.getItem('name') + '</b>';
                } else {
                    document.getElementById('username').innerHTML = ''
                }

            }
                .bind(this),
            1000
        );
    }, []);
    const obtenerDatos = async () => {
        var axios = require('axios');
        var data = '';
        if (sessionStorage.getItem('nivel') == "admin") {
            var config = {
                method: 'get',
                url: 'http://cerebelloback.echilateral.com/api/v1/courses',
                headers: {
                    'Accept': 'application/vnd.api+json',
                    'Content-Type': 'application/vnd.api+json',
                    'Authorization': 'Bearer ' + sessionStorage.getItem('token')
                },
                data: data
            };
            const response = await axios(config)
            try {
                //const jsonData =  response;
                const jsonData = response;
                let json = [{
                    data: jsonData.data.data
                }]
                sessionStorage.setItem('courses', json[0].data);
                console.log(json[0].data)
                setCourses(json[0].data)
            } catch (error) {
                console.log(error);
            };

        } else if (sessionStorage.getItem('nivel') == "student"||sessionStorage.getItem('nivel') == "teacher") {

            var config = {
                method: 'get',
                url: 'http://cerebelloback.echilateral.com/api/v1/cohorts',
                headers: {
                    'Accept': 'application/vnd.api+json',
                    'Content-Type': 'application/vnd.api+json',
                    'Authorization': 'Bearer ' + sessionStorage.getItem('token')
                }
            };

            axios(config)
                .then(function (response) {
                    const jsonData = response;
                    let json = [{
                        data: jsonData.data.data
                    }]
                    sessionStorage.setItem('courses', json[0].data);
                    console.log(json[0].data)
                    setCourses(json[0].data)
                })
                .catch(function (error) {
                    console.log(error);
                });

        }

    }




    const classes = useStyles();
    const [count, setCount] = useState(0);
    if (sessionStorage.getItem("token") === null) {

        return <Redirect to='/login' />;
    } else {
        return (
            <div className="MuiGrid-grid-xs-12 ">
                <div className={classes.Title} >
                    <h3>Mis Cursos</h3>

                </div>


                <Grid container className={classes.activity_grid}>
                    {
                        courses.map((data, index) => {

                            if (index < 3) {
                                return (

                                    <div className={classes.activity_block}>
                                        <div className={classes.text} >
                                        
                                            <Grid item xs={12} sm={11} lg={10}>
                                                <Link to={{
                                                    pathname: '/course',
                                                    Activity: {
                                                        activityProps: data.attributes.name,
                                                        id: data.id

                                                    }
                                                }
                                                }
                                                    className={classes.link_style} >

                                                    <Box borderRadius={12} border={0} m={2} p={2} className={classes.activity_box} className="classRoom"
                                                        boxShadow={3}
                                                        borderColor="grey.500"
                                                        width='100%'
                                                    >
                                                        <Grid container xs={9} className={classes.activity_grid, classes.inlineCourse}>
                                                            <Box className={classes.coursePosition}>
                                                                <h2 className={classes.textoOculto, classes.clasesName}>{data.attributes.name}</h2>
                                                                <span className={classes.textoOculto, classes.clasesDescription}>{data.attributes.description}</span>
                                                                <span className={classes.textoOculto, classes.clasesDescription, classes.bold}>{data.attributes.date}</span>
                                                            </Box>
                                                        </Grid>
                                                        <Grid container xs={2} className={classes.activity_grid}>
                                                            <Box>
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
            </div >
        );
    }
}

export default Courses;