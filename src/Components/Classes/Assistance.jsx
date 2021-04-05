import { Fragment } from "react";
import 'date-fns';
import React from 'react';
import { Grid, makeStyles, Box, Button, ListItemIcon, Link, List, ListItem } from '@material-ui/core';
import { CloudQueue } from '@material-ui/icons'
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
    content: {
        width: '100%',

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

const Assistance = () => {
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const classes = useStyles();
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    return (


        <div className="Assistance">
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
                <ListItem button>
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
        </div>
    );
}

export default Assistance;