import { List, ListItem, TextField, makeStyles, Grid, Box, FormControlLabel, Checkbox, Button } from '@material-ui/core';
import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import 'date-fns';

import { useForm } from "react-hook-form";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
    DatePicker
} from '@material-ui/pickers';


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

const NewClass = (props) => {
    const [selectedDate, setSelectedDate] = React.useState(null);
    const [selectendDate, setSelectendDate] = React.useState(null);
    let history = useHistory();
    console.log(props.location)
    let cohort=props.location.cohort_id
    const [endDAte, setEndDate] = useState(false);
    const handleCheck = () => {
        setEndDate(!endDAte)


    }

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const handleEndDateChange = (date) => {
        setSelectendDate(date);
    };
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [activity, setActivity] = useState([]);

    const onSubmit = (data) => {
        let endDate = data.enddate;

        if (data.noEndDate == 'true') {
            console.log("aca")
            endDate = null;
        }
        console.log(cohort);

        var axios = require('axios');
        var data = JSON.stringify({
            "data": {
                "type": "activities",
                "attributes": {
                    "cohort_id": cohort,
                    "name": data.title,
                    "description": data.description,
                    "start_date": data.startdate,
                    "end_date": endDate,
                    "has_end": 0,
                    "is_active": 1,
                    "is_evaluated": 0,
                    "state_id": 1,
                    "createdAt": "2021-04-01T00:00:00.000000Z",
                    "updatedAt": "2021-04-01T00:00:00.000000Z"
                }
            }
        });
        

        var config = {
            method: 'post',
            url: 'http://cerebelloback.echilateral.com/api/v1/activities',
            headers: {
                'Accept': 'application/vnd.api+json',
                'Content-Type': 'application/vnd.api+json',
                'Authorization': 'Bearer ' + sessionStorage.getItem('token')
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                history.push("/");    
            })
            .catch(function (error) {
                console.log(error);
            });


    }


    const showendDate = () => {

        if (endDAte == false) {

            return (
                <div className={classes.datePicker_Box}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DatePicker
                            {...register("enddate")}
                            inputVariant="outlined"
                            variant="inline"
                            format="yyyy-MM-dd"
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
    if (sessionStorage.getItem("token") === null) {

        return <Redirect to='/login' />;
    } else {
        return (
            <div className="Assistance">
                <Grid fullWidth xs={12}>
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                                    {...register("title", { required: true })}
                                    fullWidth labelWidth={60} id="outlined-basic" variant="outlined" />
                            </ListItem>
                            {errors.title && <span>Completa el titulo</span>}
                            <ListItem >
                                <label><h3>Descripción la Actividad</h3></label>
                            </ListItem>
                            <ListItem className={classes.listStyle}>
                                <TextField
                                    {...register("description", { required: true })}
                                    fullWidth
                                    labelWidth={60}
                                    id="outlined-basic"
                                    variant="outlined"
                                    multiline
                                    rows={5} />
                            </ListItem>
                            {errors.description && <span>Completa la Descripción</span>}
                        </List>
                        {errors.startdate && <span>Coloca una fecha de inicio</span>}
                        <Grid container xs={12}>
                            <Box className={classes.datePicker_Box}>

                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <DatePicker
                                        {...register("startdate", { required: true })}
                                        inputVariant="outlined"
                                        variant="inline"
                                        format="yyy-MM-dd"
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
                                    {...register("noEndDate")}
                                    value={endDAte}
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
                            >
                                Cancelar
                        </Button>
                        </Grid>
                    </form>
                </Grid>
            </div>
        );
    }
}


export default NewClass;