import React, { useState, useContext, Component } from 'react';
import { List, ListItem, TextField, makeStyles, Grid, Box, FormControlLabel, Checkbox, Button } from '@material-ui/core';


import DateFnsUtils from '@date-io/date-fns';
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link } from "react-router-dom";

import * as ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


import { AppContext } from "../../Provider"
import 'date-fns';

import { useForm } from "react-hook-form";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
    DatePicker
} from '@material-ui/pickers';
import { Col, Container, FormGroup, Input, Row } from 'reactstrap';
import { common } from '@material-ui/core/colors';


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
    modules = {
        toolbar: {
            container: [
                [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
                [{ size: [] }],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{ 'list': 'ordered' },{ 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
                ['link', 'image'],
                ['clean'], ['code-block']
            ],
        },
        clipboard: {
            matchVisual: false,
        },
    }
    formats=[
        'header',
        'font',
        'size',
        'bold',
        'italic',
        'underline',
        'strike', 'blockquote','link', 'list','bullet','indent','image','video','code-block',
    ]
    onChangeArticleTitle=(value)=>{
        this.setState(state:{
            article:{
                
                title:value
                
            }
        })
    }
    constructor = (props) => {

        this.state = {
            article: {
                tite: '',
                content: '',
                createDate: new Date(),
                featureImage: '',
                isPublish: false,
                lastModified: new Date(),
                createUserID: ''
            }
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
                        <ListItem >
                            <Container>
                                <Row>
                                    <Col xl={9} lg={9} md={8} sm={12} xs={12}>
                                        <h2>nueva clase</h2>
                                        <FormGroup>
                                            <lable>Titulo</lable>
                                            <Input type='text' name='clase' placeholder='' onChange={(e) => console.log('')}
                                                value={this.state.article.title} />
                                        </FormGroup>
                                        <FormGroup>
                                            <ReactQuill
                                                ref={(el) => this.quill = el}
                                                value={this.state.article.content}
                                                onChange={(e) => common.log('')}
                                                theme='snow'
                                                modules={this.modules }
                                                formats={ this.formats}
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xl={3} lg={3} md={4} sm={12} xs={12}></Col>
                                </Row>
                            </Container>
                        </ListItem>



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
                            <Button className={classes.buttonback}>
                                <Link to={{
                                    pathname: '/'
                                }}>
                                    <div className={classes.back}>
                                        <ArrowBackIosIcon style={{ color: '#707070' }} />   <h3 style={{ margin: '0', color: '#707070' }}>Cancelar</h3>
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