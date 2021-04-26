import { List, ListItem, TextField, makeStyles, Grid, Box, FormControlLabel, Checkbox, Button } from '@material-ui/core';
import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import 'date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
    DatePicker
} from '@material-ui/pickers';
import id from 'date-fns/esm/locale/id/index.js';

const useStyles = makeStyles(() => ({
    listStyle: {
        marginTop: '-20px',
        width: '80%'
    },
    datePicker_Box: {
        padding: '5px'
    },
    check_Box: {
        padding: '25px'
    }


}));
let text = [{
    title: "<h1>hola</h1>",
}]

const NewClass = () => {
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const [selectendDate, setSelectendDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const [endDAte, setEndDate] = useState(true);
    const handleCheck = () => {
        setEndDate(!endDAte)


    }

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const handleEndDateChange = (date) => {
        setSelectendDate(date);
    };
    const showendDate = () => {

        if (endDAte == true) {

            return (
                <div className={classes.datePicker_Box}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DatePicker
                            
                            inputVariant="outlined"
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-endDate"
                            label="fecha final"
                            value={selectendDate}
                            onChange={handleEndDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                </div>
            )
        } else {
            return (<div></div>)
        }
    }
    const classes = useStyles();
    return (
        <div className="Assistance">
            <Grid fullWidth xs={12}>
                <form noValidate autoComplete="off">
                    <List >
                        <ListItem >
                            <label><h3>Nombre de la Actividad</h3></label>

                            {
                                text.map((data, index) => {
                                    return (
                                        <div>
                                            {/** <div dangerouslySetInnerHTML={{__html: data.title}} />*/}

                                        </div>
                                    );
                                }
                                )
                            }

                        </ListItem>
                        <ListItem className={classes.listStyle}>
                            <TextField
                                fullWidth labelWidth={60} id="outlined-basic" variant="outlined" />
                        </ListItem>
                        <ListItem >
                            <label><h3>Descripción la Actividad</h3></label>


                        </ListItem>
                        <ListItem className={classes.listStyle}>
                            <TextField
                                fullWidth
                                labelWidth={60}
                                id="outlined-basic"
                                variant="outlined"
                                multiline
                                rows={5} />
                        </ListItem>

                    </List>
                    <Grid container xs={12}>
                        <Box className={classes.datePicker_Box}>

                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <DatePicker
                                    inputVariant="outlined"
                                    variant="inline"
                                    format="MM/dd/yyyy"
                                    margin="normal"
                                    id="date-picker-inline"
                                    label="fecha inicio"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </MuiPickersUtilsProvider>
                        </Box>

                        <Box className={classes.datePicker_Box}>
                            {showendDate}
                        </Box>
                        <Box className={classes.check_Box}>
                            <FormControlLabel
                                value="end"
                                onChange={handleCheck}
                                onClick={showendDate}
                                control={<Checkbox color="primary" />}
                                label="No finaliza"
                                labelPlacement="end"
                            />
                        </Box>
                    </Grid>
                    <Grid container xs={12}>
                        <Button
                            type="submit"
                        >
                            Guardar
                        </Button>
                        <Button
                            type="submit"
                        >
                            Cancelar
                        </Button>
                    </Grid>

                </form>
            </Grid>
        </div>
    );
}


export default NewClass;