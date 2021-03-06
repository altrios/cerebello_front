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
        textAlign: 'center',
        padding: '10px',
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
    }

}));


export const Courses = (props) => {


    const [courses, setCourses] = useState([]);
    React.useEffect(() => {


        obtenerDatos()
        console.log(courses)
    }, []);

    const obtenerDatos = async () => {
        var axios = require('axios');
        var data = '';

        console.log(sessionStorage.getItem('name'))
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
            console.log(json[0].data);
            {/*
                json[0].data.map((data, index)=>{
                    setCourses(data)
                    console.log(data)
                })*/
            }
            console.log(json[0].data)
            setCourses(json[0].data)




        } catch (error) {
            console.log(error);
        };

    }




    const classes = useStyles();
    const [count, setCount] = useState(0);
    if (sessionStorage.getItem("token") === null) {

        return <Redirect to='/login' />;
    } else {
        return (
            <div className="MuiGrid-grid-xs-12 ">
                <div className={classes.Title} >
                    <h3>Cronograma de Actividades</h3>

                </div>


                <Grid container xs={12} className={classes.activity_grid}>
                    {
                        courses.map((data, index) => {

                            if (index < 2) {
                                return (

                                    <div className={classes.activity_block}>
                                        <div className={classes.text} >

                                            <Grid xs={10}

                                            >
                                                <Link to={{
                                                    pathname: '/course',
                                                    Activity: {
                                                        activityProps: data.attributes.name

                                                    }
                                                }
                                                } className={classes.link_style} >

                                                    <Box borderRadius={12} border={1} m={2} p={2} className={classes.activity_box} className="classRoom"
                                                        boxShadow={3}
                                                        borderColor="grey.500"
                                                        width='100%'
                                                    >
                                                        <Grid container xs={9} className={classes.activity_grid}>
                                                            <Box>
                                                                <h2>{data.attributes.name}</h2>
                                                                <span>{data.attributes.description}</span>
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