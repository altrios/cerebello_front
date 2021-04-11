import React from "react";
import { Box, Grid, makeStyles, ListItem } from "@material-ui/core";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
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
        width: '100%',
    },
    textoOculto: {
        width: '95%',
        paddingLeft: '10px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        marginBottom: '2%',
    },
    Title: {
        textAlign: 'left',
        fontSize:'1.5rem',
        padding: '5px',
        color: '#117CC3',
    },
    activity_box: {
        color: 'black',
    },
    activity_grid: {
        [theme.breakpoints.down('sm')]: {
            display: 'block',
            width: '100%',
        },
    },
    activity_block: {
        color: 'black',
        [theme.breakpoints.up('sm')]: {
            width: '33%',
        },
        [theme.breakpoints.up('xl')]: {
            width: '33%'
        },
    },
    link_style: {
        color: "snow",
    },
    arrowIcon:{
        height: '2em',
        fontSize:'2.5rem',
    },
    arrowPosition: {
        display: 'block',
        float: 'right',
        marginLeft: '12%',
        my: 'auto',
    },


}));

function Courses() {
    const classes = useStyles();
    return (
        <div className="MuiGrid-grid-xs-12 ">
            <div className={classes.Title} pl={20}>
                <h3>Mis Cursos</h3>
            </div>
            <Grid container xs={12} className={classes.activity_grid}>
                {
                    activities.map((data, index) => {
                        if (index <= 2) {
                            return (

                                <div className={classes.activity_block}>
                                    <div className={classes.text} >

                                        <Grid xs={11}>
                                            <Link to={{
                                                pathname: '/course',
                                                Activity: {
                                                    activityProps: data.attributes.name
                                                }
                                            }
                                            } className={classes.link_style} >
                                                
                                                <Box borderRadius={20} border={0} mb={2} p={0} className={classes.activity_box} className="classRoom"
                                                    boxShadow={3}
                                                    borderColor="grey.500"
                                                    width='100%'
                                                >
                                                    <Grid container xs={9} className={classes.activity_grid}>
                                                        <Box>
                                                            <h2 className={classes.textoOculto}>{data.attributes.name}</h2>
                                                            <span className={classes.textoOculto}>{data.attributes.description}</span>
                                                        </Box>
                                                    </Grid>
                                                    <Grid container xs={1} className={classes.activity_grid, classes.arrowPosition}>
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
            <div className={classes.Title} pl={20}>
                <h3>Mis Cursos</h3>
            </div>
            <Grid container xs={12} className={classes.activity_grid}>
                {
                    activities.map((data, index) => {
                        if (index <= 2) {
                            return (

                                <div className={classes.activity_block}>
                                    <div className={classes.text} >

                                        <Grid xs={11}>
                                            <Link to={{
                                                pathname: '/course',
                                                Activity: {
                                                    activityProps: data.attributes.name
                                                }
                                            }
                                            } className={classes.link_style} >
                                                
                                                <Box borderRadius={20} border={0} mb={2} p={0} className={classes.activity_box} className="classRoom"
                                                    boxShadow={3}
                                                    borderColor="grey.500"
                                                    width='100%'
                                                >
                                                    <Grid container xs={9} className={classes.activity_grid}>
                                                        <Box>
                                                            <h2 className={classes.textoOculto}>{data.attributes.name}</h2>
                                                            <span className={classes.textoOculto}>{data.attributes.description}</span>
                                                        </Box>
                                                    </Grid>
                                                    <Grid container xs={1} className={classes.activity_grid, classes.arrowPosition}>
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

export default Courses;