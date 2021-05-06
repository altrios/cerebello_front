import React, { useState } from "react";
import { Box, Grid, makeStyles, Button, ListItemIcon } from "@material-ui/core";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { ClassRounded, CloudQueue, Computer, List } from '@material-ui/icons';



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
    fontSize: '1.5rem',
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
    marginLeft: '3%',
    padding: 'auto',
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
    marginTop: '7%',

  },
  clasesDescription: {
    margin: '0',
  },
  bold: {
    fontWeight: 'bold',
  }

}));

function ActivityPage() {

  const [courses, setCourses] = useState([]);
  React.useEffect(() => {
    obtenerDatos()
    console.log(courses)
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
  return (
    <div className=" App ">
      <Grid container xs={12} className={classes.activity_grid}>
        <Box className={classes.centerBox}>
          <div className={classes.title} >
            <h3>Mis Cursos</h3>
          </div>
        </Box>


        {
          courses.map((data, index) => {

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
                          <Button xs={11} className="classRoomButon" className={classes.style_buton} color="white" href="https://us02web.zoom.us/j/7117669375?pwd=NlZ4akNzN1lXQ3hQSWk5UWkwQnF2UT09"
                            target="blank">
                            <ListItemIcon>
                              <Computer style={{ color: "#23D9B7" }} />
                            </ListItemIcon>
                            <b className={classes.colorVerde}>Iniciar clase</b></Button>
                        </Box>

{/*
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
                                <List style={{ color: "#23D9B7" }} />
                              </ListItemIcon>
                              <b className={classes.colorVerde}>Asistencia</b></Button></Link>
                        </Box>
 */}
                      </Grid>
                      <Link to={{
                        pathname: '/course',
                        Activity: {
                          activityProps: data.attributes.name,
                          id: data.id

                      }
                      }} className={classes.link_style} >
                        <Grid container xs={20} className={classes.activity_grid, classes.inlineCourse}>
                          <Box className={classes.coursePosition}>
                            <h2 className={classes.textoOculto, classes.clasesName}>{data.attributes.name}</h2>
                            <span className={classes.textoOculto, classes.clasesDescription}>{data.attributes.description}</span>
                            <br />
                            <span className={classes.textoOculto, classes.clasesDescription, classes.bold}>{data.attributes.date}</span>
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