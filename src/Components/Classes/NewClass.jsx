import { List, ListItem, TextField, makeStyles, Grid, Box, FormControlLabel, Checkbox, Button } from '@material-ui/core';
import React, { useState, useContext, useRef } from 'react';
//editor de texto
import JoditEditor from "jodit-react";

import DateFnsUtils from '@date-io/date-fns';
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link } from "react-router-dom";
import { AppContext } from "../../Provider"
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
        width: '80%',
        display:'none'
        
    },   
    title: {
        marginTop: '-20px',
        width: '80%'
    },
    datePicker_Box: {
        padding: '5px'
    },
    check_Box: {
        padding: '25px'
    },
    bGuardar: {
        backgroundColor: '#117CC3',
        color: 'white',
        marginRight: '3%',
        "&:hover": {
            backgroundColor: '#0B5C91',
            color: 'white',
          }
    },
    buttonback: {
        border:'solid 2px #A7A7A7',
    },
    botones: {
        marginTop: '4%',
    },
    error: {
        color: 'red',
        float:'left',
        marginLeft:'1%'
    },
    errorMargin: {
        color: 'red',
        paddingTop: '0%',
        float: 'left'

    }


}));


const NewClass = (props) => {

    const editor = useRef(null)
    const [content, setContent] = useState('')
    console.log(content=='')
    const config = {
        readonly: false // all options from https://xdsoft.net/jodit/doc/
    }

    const [state, setState] = useContext(AppContext)
    const [selectedDate, setSelectedDate] = React.useState(null);
    const [selectendDate, setSelectendDate] = React.useState(null);
    let history = useHistory();
    console.log(props.location)
    let cohort = props.location.cohort_id
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
console.log("submit")
        if (data.noEndDate == 'true') {
            console.log("aca")
            endDate = null;
        }
        console.log(content);

        var axios = require('axios');
        var data = JSON.stringify({
            "data": {
                "type": "activities",
                "attributes": {
                    "cohort_id": cohort,
                    "name": data.title,
                    "description": content,
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
                'Authorization': 'Bearer ' + state.token
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
                            autoOk="true"
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

                            </ListItem>
                            <ListItem className={classes.title}>
                                <TextField
                                    {...register("title", { required: true })}
                                    fullWidth labelWidth={60} id="outlined-basic" variant="outlined" />
                            </ListItem>
                            {errors.title && <span className={classes.error}>*Completa el título</span>}
                            
                            <ListItem >
                                <label><h3>Descripción la Actividad</h3></label>
                            </ListItem>
                            
                            <ListItem className={classes.title}>
                            <JoditEditor
                            ref={editor}
                            value={''}
                            config={config}
                            tabIndex={1} // tabIndex of textarea
                            onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                            onChange={newContent => { }}
                        />
                        
                            </ListItem>
                            {errors.editor && <span>*Completa el description</span>}
                        </List>
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
                                        autoOk="true"
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
                        {errors.startdate && <span className={classes.errorMargin}>*Coloca una fecha de inicio</span>}
                        <Grid container xs={12} className={classes.botones}>

                            <Button type="submit" className={classes.bGuardar}>Guardar</Button>
                            <Button className={classes.buttonback}>
                                <Link to={{
                                    pathname: '/'
                                }}>
                                    <div className={classes.back}>
                                        <h4 style={{ margin: '0', color: '#707070' }}>Cancelar</h4>
                                    </div>
                                </Link>
                            </Button>
                        </Grid>
                    </form>
                </Grid>
            </div>
        );
    }
}


export default NewClass;