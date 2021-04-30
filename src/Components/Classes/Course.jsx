import React from "react";
import { Box, Grid, makeStyles, ListItem,  Button } from "@material-ui/core";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link } from "react-router-dom";

const activities = [{

    "id": "1",
    "attributes": {
        "name": "Ingles Basico A1",
        "description": "Ingles básico para principiantes",
        "lenguage": "Ingles",
        "created_at": "2021-02-09T00:34:46.000000Z",
        "updated_at": "2021-02-09T00:34:46.000000Z",
        "deleted_at": null
    }
},
{

    "id": "2",
    "attributes": {
        "name": "Ingles Basico A2 - Editado",
        "description": "Ingles básico para principiantes",
        "lenguage": "Ingles",
        "created_at": "2021-02-09T00:35:47.000000Z",
        "updated_at": "2021-02-09T02:01:28.000000Z",
        "deleted_at": null
    }
},
{

    "id": "3",
    "attributes": {
        "name": "Chino Mandarin",
        "description": null,
        "lenguage": "Chino",
        "created_at": "2021-03-25T02:14:05.000000Z",
        "updated_at": "2021-03-25T02:14:05.000000Z",
        "deleted_at": null
    }
}]
const useStyles = makeStyles((theme) => ({
    text: {
        textAlign: 'left',
        padding: '10px',
    },
    Title: {
        textAlign: 'center',
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
    }

}));
export const Course = (props) => {
    const NoAuth = "Acceso no autorizado";

    if (sessionStorage.getItem('Activity') != '' && sessionStorage.getItem('Activity') != { NoAuth } && sessionStorage.getItem('Activity') != null) {
        if (props.location.Activity) {
            sessionStorage.removeItem('Activity');
            console.log(props.location.Activity.activityID)
            const prop = [{ algo: props.location.Activity }];
            let activity = prop[0].algo.activityProps;
            sessionStorage.setItem('Activity', prop[0].algo.activityProps);
            sessionStorage.setItem('IdCourse', props.location.Activity.activityID);
        }

    } else {

        sessionStorage.setItem('Activity', NoAuth);
    }




    const classes = useStyles();
    return (
        <div className="MuiGrid-grid-xs-12 ">
            <div className={classes.Title} >
                <h1>{window.sessionStorage.getItem('Activity')}</h1>
                <Button>
                    <Link to={{
                        pathname: '/newclass',
                        courseID: sessionStorage.getItem('IdCourse')
                        
                    }
                    }>
                        <h3>Crear Actividad</h3>
                    </Link>
                </Button>
            </div>

            <Grid container xs={12} className={classes.activity_grid}>
                {
                    activities.map((data, index) => {
                        if (index <= 2) {
                            return (

                                <div className={classes.activity_block}>
                                    <div className={classes.text} >

                                        <Grid xs={10} >
                                            <Link to={{
                                                pathname: '/lalala',
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

export default Course;