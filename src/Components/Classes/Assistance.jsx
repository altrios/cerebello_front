import 'date-fns';
import React, { useState } from "react";
import { Grid, makeStyles, Box, Button, ListItemIcon, Link, List, ListItem } from '@material-ui/core';
import { CloudQueue } from '@material-ui/icons'
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
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
    Assistance: 'flase'
},
{
    Nombre: 'Santi',
    Apellido: 'Artista',
    Assistance: 'flase'
}
]
const Assistance = () => {
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const [assistance, setAssistance] = useState(false);
    const [students, setStudents] = useState();
    const classes = useStyles();
    const handleDateChange = (date) => {
        setSelectedDate(date);
        setAssistance(true)
        console.log(selectedDate)
    };
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
                                    <KeyboardDatePicker
                                        disableToolbar
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
                            userAsistance.map((data, index) => {
                                if (assistance == true) {
                                    return (
                                    <StudentAsistance name={data.Nombre} lastname={data.Apellido} assistance={data.Assistance}/>
                                    );
                                }
                            })
                        }
            </div>
        </div>
    );
}

export default Assistance;