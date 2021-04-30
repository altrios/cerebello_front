import React from "react";
import { Box, Grid, makeStyles, Button, ListItemIcon } from "@material-ui/core";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { ClassRounded, CloudQueue, Computer, List } from '@material-ui/icons';

const activities = [{
  "type": "courses",
  "id": "1",
  "attributes": {
    "name": "The Best A2",
    "description": "Teacher: Ricardo Barrera",
    "lenguage": "Inglés",
    "date": "Sunday 8am - 12m",
    "created_at": "2021-02-09T00:34:46.000000Z",
    "updated_at": "2021-02-09T00:34:46.000000Z",
    "deleted_at": null
  }
},
{
  "type": "courses",
  "id": "2",
  "attributes": {
    "name": "Alemán",
    "description": "Teacher: William Deaquiz",
    "lenguage": "Alemán",
    "date": "Sunday 8am - 12m",
    "created_at": "2021-02-09T00:35:47.000000Z",
    "updated_at": "2021-02-09T02:01:28.000000Z",
    "deleted_at": null
  }
},
{
  "type": "courses",
  "id": "3",
  "attributes": {
    "name": "Birds",
    "description": "Teacher: William Deaquiz",
    "lenguage": "Inglés",
    "date": "Sunday 8am - 12m",
    "created_at": "2021-03-25T02:14:05.000000Z",
    "updated_at": "2021-03-25T02:14:05.000000Z",
    "deleted_at": null
  }
},
{
  "type": "courses",
  "id": "4",
  "attributes": {
    "name": "Cowboys",
    "description": "Teacher: Sol Buitrago",
    "lenguage": "Ingles",
    "date": "Sunday 8am - 12m",
    "created_at": "2021-02-09T00:34:46.000000Z",
    "updated_at": "2021-02-09T00:34:46.000000Z",
    "deleted_at": null
  }
},
{
  "type": "courses",
  "id": "5",
  "attributes": {
    "name": "Frances",
    "description": "Teacher: William Deaquiz",
    "lenguage": "Francés",
    "date": "Sunday 8am - 12m",
    "created_at": "2021-02-09T00:34:46.000000Z",
    "updated_at": "2021-02-09T00:34:46.000000Z",
    "deleted_at": null
  }
},
{
  "type": "courses",
  "id": "6",
  "attributes": {
    "name": "Juniors",
    "description": "Teacher: Pedro Cardenas",
    "lenguage": "Inglés",
    "date": "Sunday 8am - 12m",
    "created_at": "2021-02-09T00:34:46.000000Z",
    "updated_at": "2021-02-09T00:34:46.000000Z",
    "deleted_at": null
  }
},
{
  "type": "courses",
  "id": "7",
  "attributes": {
    "name": "Mant Rays",
    "description": "Teacher: Andrea Rodriguez",
    "lenguage": "Inglés",
    "date": "Sunday 8am - 12m",
    "created_at": "2021-02-09T00:34:46.000000Z",
    "updated_at": "2021-02-09T00:34:46.000000Z",
    "deleted_at": null
  }
},
{
  "type": "courses",
  "id": "6",
  "attributes": {
    "name": "Juniors",
    "description": "Teacher: Pedro Cardenas",
    "lenguage": "Ingles",
    "date": "Sunday 8am - 12m",
    "created_at": "2021-02-09T00:34:46.000000Z",
    "updated_at": "2021-02-09T00:34:46.000000Z",
    "deleted_at": null
  }
}

]
const useStyles = makeStyles((theme) => ({
  text: {
    textAlign: 'left',
    padding: '0',
    margin: '0',

  },
  activity_box: {
    color: 'black',
  },
  activity_grid: {
    padding: '0',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },

  },
  title: {
    textAlign: 'left',
    width: '50%',
    display: 'block',
    fontSize:'1.5rem',
    color: '#117CC3',
  },
  activity_block: {
    [theme.breakpoints.up('sm')]: {
      width: '90%',

    },
    [theme.breakpoints.up('xl')]: {
      width: '94%',
    },
  },
  link_style: {
    color: "snow",
    width: '60%',
  },
  arrowIcon: {
    height: '2em',
    fontSize: '2.5rem'
  },
  class_buton: {
    marginRight: '3%',
    marginLeft:'3%',
    padding:'auto',
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(3),
    },
  },
  style_buton: {
    left: '5px',
    top: ' 27.5%',
    backgroundColor: 'white',
    padding: '10px',
    marginLeft: '0',
    whiteSpace: 'nowrap',
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(1),
    },
    "&:hover": {
      backgroundColor: '#F2F2F2',
      color: 'white',
    }
  },
  arrowPosition: {
    display: 'block',
    position: 'relative',
    float: 'right',
    marginLeft: '12vw',
    marginTop: '0.4%',
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
},
coursePosition: {
  display: 'block',
  width: '11vw',
  height: '10vh',

},
centerBox: {
  display: 'block',
  width: '100%',
  marginLeft: '3%',
},
colorVerde: {
  color: '#23D9B7',
},
clasesName: {
  margin: 'auto',
  display: 'block',
  marginTop:'7%',
  
},
clasesDescription: {
  margin: '0',
},
bold: {
  fontWeight:'bold',
}

}));

function ActivityPage() {
  const classes = useStyles();
  return (
    <div className=" App ">
      <Grid container xs={12} className={classes.activity_grid}>
        <Box className={classes.centerBox}>
          <div className={classes.title} >
            <h3>Mis Cursos</h3>
          </div>
        </Box>


        {
          activities.map((data, index) => {

              return (

                <div className={classes.activity_block}>
                  <div className={classes.text} >

                    <Grid xs={12} className={classes.centerBox}>

                      <Box borderRadius={20} border={0} mb={2} p={0} className={classes.activity_box} className="classRoom"
                        boxShadow={3}
                        borderColor="grey.500"
                        width='100%'
                      >
                        <Grid container xs={12} className={classes.activity_grid}>

                          <Box xs={12} className={classes.class_buton}>
                              <Button xs={11} className="classRoomButon" className={classes.style_buton} color="white"  href="https://us02web.zoom.us/j/7117669375?pwd=NlZ4akNzN1lXQ3hQSWk5UWkwQnF2UT09"
                              target="blank">
                                <ListItemIcon>
                                  <Computer style={{color:"#23D9B7"}} />
                                </ListItemIcon>
                                <b className={classes.colorVerde}>Iniciar clase</b></Button>
                          </Box>


                          {/* <Box>
                            <Link to={{
                              pathname: '/assistance',
                              Activity: {
                                activityProps: data.attributes.name

                              }
                            }
                            }>
                              <Button className={classes.style_buton} color="white">
                                <ListItemIcon>
                                  <List style={{color:"#23D9B7"}}/>
                                </ListItemIcon>
                                <b className={classes.colorVerde}>Asistencia</b></Button></Link>
                          </Box> */}

                        </Grid>
                        <Link to={{
                          pathname: '/course',
                          Activity: {
                            activityProps: data.attributes.name

                          }
                        }} className={classes.link_style} >
                          <Grid container xs={20} className={classes.activity_grid, classes.inlineCourse}>
                            <Box className={classes.coursePosition}>
                              <h2  className={classes.textoOculto, classes.clasesName}>{data.attributes.name}</h2>
                              <span  className={classes.textoOculto, classes.clasesDescription}>{data.attributes.description}</span>
                              <br/>
                              <span  className={classes.textoOculto, classes.clasesDescription, classes.bold}>{data.attributes.date}</span>
                            </Box>
                            <Box className={classes.arrowPosition}>
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
          )
        }
      </Grid>
    </div >
  );
}

export default ActivityPage;