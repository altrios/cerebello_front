import React from "react";
import { Box, Grid, makeStyles } from "@material-ui/core";
import { Backdrop } from '@material-ui/core';
import { Borders } from "@material-ui/system";
import Activitie from '../Img/Activities/thumnail-Fondo-1.png';
import { Link } from "react-router-dom";

const activities = [{
    "type": "courses",
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
    "type": "courses",
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
    "type": "courses",
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
    activity_box: {
        backgroundImage: `url(${Activitie})`,

        color: 'black',
    },
    activity_grid: {
        [theme.breakpoints.down('sm')]: {
            display: 'block',


        },

    },
    activity_block: {


        [theme.breakpoints.up('sm')]: {
            width: '100%',


        },
        [theme.breakpoints.up('xl')]: {
            width: '33%'
        },
    }

}));

function Activities() {
    const classes = useStyles();
    return (
        <div className="MuiGrid-grid-xs-12">
            <div className="classes.Title" >
                <h3>Cronograma de Actividades</h3>
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
                                                pathname: '/activity',
                                                Activity: {
                                                    activityProps: data.attributes.name

                                                }
                                            }}>
                                                <Box borderRadius={12} border={1} m={2} p={2} className={classes.activity_box}
                                                    boxShadow={3}
                                                    borderColor="grey.500"
                                                    width='100%'
                                                >
                                                    <h2>{data.attributes.name}</h2>
                                                    <span>{data.attributes.description}</span>
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

export default Activities;