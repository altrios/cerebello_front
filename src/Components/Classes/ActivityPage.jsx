import React, { useState, useContext } from "react";
import { Box, Grid, makeStyles, Button, ListItemIcon } from "@material-ui/core";
import { Link, Redirect } from "react-router-dom";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { ClassRounded, CloudQueue, Computer, List } from '@material-ui/icons';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { AppContext } from "../../Provider"



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
    [theme.breakpoints.up('xs')]: {
      width:'15%',
    },
  [theme.breakpoints.up('sm')]: {
      marginTop: '0',
    },
    [theme.breakpoints.up('md')]: {
      
    },
    [theme.breakpoints.up('lg')]: {
      
    }
  },
  style_buton: {
    left: '5px',
    top: ' 27.5%',
    backgroundColor: 'white',
    padding: '10px',
    marginLeft: '0',
    whiteSpace: 'nowrap',
    [theme.breakpoints.up('xs')]: {
      marginTop: '70%',
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: '70%',
      },
      [theme.breakpoints.up('md')]: {
        marginTop: '5%',
      },
      [theme.breakpoints.up('lg')]: {
        marginTop: '0%',
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
    [theme.breakpoints.up('xs')]: {
      marginLeft: '15vw',
    },
  [theme.breakpoints.up('sm')]: {
    marginLeft: '4vw',
    marginTop: '5%',
    },
    [theme.breakpoints.up('md')]: {
      
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: '0%',
      marginLeft: '20vw',
    }
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
  [theme.breakpoints.up('xs')]: {
    
  },
[theme.breakpoints.up('sm')]: {
  height: '0vh',
  },
  [theme.breakpoints.up('md')]: {
    
  },
  [theme.breakpoints.up('lg')]: {
    
  }

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
    [theme.breakpoints.up('xs')]: {
      fontSize:'1em',
      marginTop: '20%',
    },
  [theme.breakpoints.up('sm')]: {
    marginTop: '20%',
    },
    [theme.breakpoints.up('md')]: {
      
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: '10%'
    }
  },
  clasesDescription: {
    margin: '0',
  },
  bold: {
    fontWeight: 'bold',
  },
  buttonback: {
    marginTop: '6vh',
    position: 'relative',
    float: 'left',
    marginLeft: '2vw',
    zIndex: '999',
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
back: {
    display: 'flex',

},
}));

function ActivityPage() {
  const [state, setState] = useContext(AppContext)
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
          'Authorization': 'Bearer ' + state.token
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

    } else if (sessionStorage.getItem('nivel') == "student" || sessionStorage.getItem('nivel') == "teacher") {

      var config = {
        method: 'get',
        url: 'http://cerebelloback.echilateral.com/api/v1/cohorts',
        headers: {
          'Accept': 'application/vnd.api+json',
          'Content-Type': 'application/vnd.api+json',
          'Authorization': 'Bearer ' + state.token
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
  if (!state.token) {
    return <Redirect to='/login' />;
  } else {
    return (
      <div className=" App ">
        <Grid container xs={12} className={classes.activity_grid}>
          <Button className={classes.buttonback}>
            <Link to={{
              pathname: '/'
            }}>
              <div className={classes.back}>
                <ArrowBackIosIcon style={{ color: '#707070' }} />   <h3 style={{ margin: '0', color: '#707070' }}>Volver</h3>
              </div>
            </Link>
          </Button>
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

                  <Grid xs={11}  md={12} container className={classes.centerBox} 
                    container
                    direction="row"
                    justify="space-around"
                    alignItems="center"
                  >

                    <Box borderRadius={20} border={0} mb={2} p={0} className={classes.activity_box} className="classRoom"
                      boxShadow={3}
                      borderColor="grey.500"
                      width='100%'
                    >
                      <Grid container xs={10} className={classes.activity_grid}>

                        <Box xs={12} className={classes.class_buton}>
                          <Button xs={11} className="classRoomButon" className={classes.style_buton} color="white" href="https://us02web.zoom.us/j/7117669375?pwd=NlZ4akNzN1lXQ3hQSWk5UWkwQnF2UT09"
                            target="blank">
                            <ListItemIcon>
                              <Computer style={{ color: "#23D9B7" }} />
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
                                <List style={{ color: "#23D9B7" }} />
                              </ListItemIcon>
                              <b className={classes.colorVerde}>Asistencia</b></Button></Link>
                        </Box> */}

                      </Grid>
                      <Link to={{
                        pathname: '/course',
                        Activity: {
                          activityProps: data.attributes.name,
                          id: data.id

                      }
                      }} className={classes.link_style} >
                        <Grid container xs={0} className={classes.activity_grid, classes.inlineCourse}>
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
}

export default ActivityPage;