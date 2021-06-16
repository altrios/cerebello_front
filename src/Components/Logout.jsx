import React, { useContext } from 'react'
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { AppContext } from "../Provider"
export default function Logout() {
    const [state, setState] = useContext(AppContext)
    var axios = require('axios');
    let history = useHistory();

    var data = JSON.stringify({});
    console.log("aja")
    var config = {
        method: 'post',
        url: 'http://cerebelloback.echilateral.com/api/logout',
        headers: {
            'Authorization': 'Bearer ' + state.token,
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
            },
        data: data
    };

    axios(config)
        .then(function (response) {
            console.log(response)
            sessionStorage.removeItem('token');
            sessionStorage.removeItem('name');
            sessionStorage.removeItem('email');
            sessionStorage.removeItem('nivel');
            sessionStorage.removeItem('title')
            sessionStorage.removeItem('description')
            setState('')

            console.log(state.token)

            history.push("/")

        })
        .catch(function (error) {
            console.log(error);
            
            sessionStorage.removeItem('token');
            sessionStorage.removeItem('name');
            sessionStorage.removeItem('email');
            sessionStorage.removeItem('nivel');
            sessionStorage.removeItem('title')
            sessionStorage.removeItem('description')
            setState('')

            console.log(state.token)

            history.push("/")
        });




    return (
        <div>


        </div>

    )
}
