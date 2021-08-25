import 'date-fns';
import React, { useState, useContext } from "react";
import { format } from 'date-fns-tz';
import { Grid, makeStyles, Box, Button, ListItemIcon, Link, List, ListItem } from '@material-ui/core';
import { CloudQueue } from '@material-ui/icons'
import DateFnsUtils from '@date-io/date-fns';
import { AppContext } from "../../Provider"
import { Redirect } from "react-router-dom";
import {
    MuiPickersUtilsProvider,
    DatePicker
} from '@material-ui/pickers';
import StudentAsistance from './StudentAsistance';

const useStyles = makeStyles((theme) => ({
    content: {
        width: '90%',

    },
    title: {
        textAlign: 'center',
        padding: '10px',
        width: '100%',
        whiteSpace: 'nowrap',
    },
    datePicker: {

    }
})
);


let userAsistance = [{
    Nombre: 'Fernando',
    Apellido: 'Martínez',
    Assistance: 'true'
},
{
    Nombre: 'Santi',
    Apellido: 'Artista',
    Assistance: 'true'
}
]
const Assistance = (props) => {
    const [selectedDate, setSelectedDate] = React.useState(new Date('2021-08-18'));
    const [students, setSutents] = useState([])
    
    const [stdent, setStdent] = useState([])
    const [assistance, setAssistance] = useState([]);
    const [state, setState] = useContext(AppContext)
    const classes = useStyles();
    const handleDateChange = (date) => {
        //console.log( )
        setSelectedDate(date);
        //setAssistance(true)
        studentsAsistance();
        
    };

    const studentsAsistance =()=>{
    

        var axios = require('axios');
        var data = JSON.stringify({
          "data": {
            "type": "activity_assistences",
            "attributes": {
              "activity_id": "1",
              "student_id": "1",
              "teacher_id": "1",
              "is_present": 1,
              "createdAt": "2021-04-02T00:00:00.000000Z",
              "updatedAt": "2021-04-02T00:00:00.000000Z"
            }
          }
        });
        
        var config = {
          method: 'get',
          url: 'http://cerebelloback.echilateral.com/api/v1/activity_assistences',
          headers: { 
            'Accept': 'application/vnd.api+json', 
            'Content-Type': 'application/vnd.api+json', 
            'Authorization': 'Bearer ' + state.token
          },
          data : data
        };
        
        axios(config)
        .then(function (response) {
            setAssistance(response.data.data)
          //console.log(response.data.data);
        })
        .catch(function (error) {
          console.log(error);
        });
        
    
}
let name ='';

    if (sessionStorage.getItem("token") === null) {

        return <Redirect to='/login' />;
    }else{
    return (
        <div className="App">
            <div className={classes.content}>
                <List componet='nav'>
                    <ListItem >
                        <Grid xs={12}>
                            <div>
                                <Box className={classes.title} >
                                    <div className={classes.title} >
                                        <h3>Cronograma de Actividades</h3>
                                        <h3>Crear Actividad</h3>
                                    </div>
                                </Box>
                            </div>
                        </Grid>
                    </ListItem>
                    <ListItem >
                        <Grid xs={12} >
                            <Box
                            >
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <DatePicker
                                        inputVariant="outlined"
                                        variant="inline"
                                        format="MM/dd/yyyy"
                                        margin="normal"
                                        id="date-picker-inline"
                                        label=""
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </MuiPickersUtilsProvider>
                                <Button></Button>
                            </Box>
                        </Grid>

                    <div container className={classes.content} >
                                    <Grid>
                                        <Box>
                                            <Link  >
                                                <Button  >
                                                    <ListItemIcon>
                                                        <CloudQueue />
                                                    </ListItemIcon>
                                                    <b>Mi Clase</b></Button></Link>
                                        </Box>
                                    </Grid>
                                </div>
                    </ListItem>
                </List>
                {
                    
                            assistance.map((data, index) => {
                               // console.log(new Date(selectedDate).getDate()+'/'+new Date(selectedDate).getMonth()+1+'/'+new Date(selectedDate).getYear())
                               /* console.log(new Date(selectedDate).getDate())
                                console.log(new Date(selectedDate).getMonth()+1)
                                console.log(new Date(selectedDate).getFullYear() )
                               // console.log(new Date(selectedDate))
                                console.log(new Date(data.attributes.createdAt).getDate())
                                console.log(new Date(data.attributes.createdAt).getMonth()+1)
                                console.log(new Date(data.attributes.createdAt).getFullYear())*/
                               // console.log(data)
                                //console.log(props.location.Activity.cohorteID)
                                //console.log(props.location)
                                  //console.log(new Date(data.attributes.createdAt).getDay()+1+'/'+new Date(data.attributes.createdAt).getMonth()+1+'/'+new Date(data.attributes.createdAt).getYear()+1)
                               if((new Date(selectedDate).getDate()==new Date(data.attributes.createdAt).getDate())
                               &&(new Date(selectedDate).getMonth()+1==new Date(data.attributes.createdAt).getMonth()+1)
                               &&(new Date(selectedDate).getFullYear()==new Date(data.attributes.createdAt).getFullYear())
                               ){
                                var axios = require('axios');

                                var config = {
                                    method: 'get',
                                    url: 'http://cerebelloback.echilateral.com/api/v1/students/'+data.attributes.student_id,
                                    headers: {
                                        'Accept': 'application/vnd.api+json',
                                        'Content-Type': 'application/vnd.api+json',
                                        'Authorization': 'Bearer ' + state.token
                                    }
                                };
                        
                                axios(config)
                                    .then(function (response) {
                                        
                                        console.log(response.data.data.attributes.user_name)
                        
                                        setSutents(response.data.data.attributes.user_name);
                        
                                    })
                                    .catch(function (error) {
                                        console.log(state.token)
                                        console.log(error);
                                    });
                        
                                  
                               } 
                               return(
                                <div><span>{students}</span></div>
                            )
                            })
                        }
            </div>
        </div>
    );
}
}

export default Assistance;