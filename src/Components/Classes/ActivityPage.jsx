import React from "react";
import { Box, Grid, makeStyles, Button, ListItemIcon } from "@material-ui/core";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { CloudQueue } from '@material-ui/icons'

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

    color: 'black',
  },
  activity_grid: {
    padding: '5px',
    [theme.breakpoints.down('sm')]: {
      display: 'block',


    },

  },
  title: {
    textAlign: 'center',
    padding: '10px',
    width: '100%',
  },
  activity_block: {

    [theme.breakpoints.up('sm')]: {
      width: '100%',
    },
    [theme.breakpoints.up('xl')]: {
      width: '90%'
    },
  },
  link_style: {
    color: "snow",
    width: '70%'
  },
  arrowIcon: {
    height: '2em',
    fontSize: '2.5rem'
  },
  class_buton: {
    width: "40%",
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(3),
    },


  },
  style_buton: {
    left: '10px',
    top: ' 30%',
    backgroundColor: 'white',
    padding: '10px',
    whiteSpace: 'nowrap',
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(1),
    },

  }

}));

function ActivityPage() {
  const classes = useStyles();
  return (
    <div className=" App ">
      <Grid container xs={12} className={classes.activity_grid}>
        <Box className={classes.title} >
          <div className={classes.title} >
            <h3>Cronograma de Actividades</h3>
          </div>
        </Box>


        {
          activities.map((data, index) => {
            if (index <= 2) {
              return (

                <div className={classes.activity_block}>
                  <div className={classes.text} >

                    <Grid xs={12} >

                      <Box borderRadius={12} border={1} m={2} p={2} className={classes.activity_box} className="classRoom"
                        boxShadow={3}
                        borderColor="grey.500"
                        width='100%'
                      >
                        <Grid container xs={12} className={classes.activity_grid}>

                          <Box xs={12} className={classes.class_buton}>
                            <Link  >
                              <Button xs={12} className="classRoomButon" className={classes.style_buton} color="white" >
                                <ListItemIcon>
                                  <CloudQueue />
                                </ListItemIcon>
                                <b>Mi Clase</b></Button></Link>
                          </Box>


                          <Box>
                            <Link to={{
                              pathname: '/assistance',
                              Activity: {
                                activityProps: data.attributes.name

                              }
                            }
                            }>
                              <Button className={classes.style_buton} color="white">
                                <ListItemIcon>
                                  <CloudQueue />
                                </ListItemIcon>
                                <b>Asistencia</b></Button></Link>
                          </Box>

                        </Grid>
                        <Link to={{
                          pathname: '/course',
                          Activity: {
                            activityProps: data.attributes.name

                          }
                        }} className={classes.link_style} >
                          <Grid container xs={12} className={classes.activity_grid}>
                            <Box>
                              <h2>{data.attributes.name}</h2>
                              <span>{data.attributes.description}</span>
                            </Box>
                            <Box>
                              <ArrowForwardIosIcon className={classes.arrowIcon} />
                            </Box>
                          </Grid>

                        </Link>
                      </Box>

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

export default ActivityPage;