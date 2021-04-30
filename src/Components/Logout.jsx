import React from 'react'
import {  Redirect } from "react-router-dom";

export default function Logout() {
    var axios = require('axios');
    var data = JSON.stringify({});
    console.log(sessionStorage.getItem('token'))
    var config = {
        method: 'post',
        url: 'http://cerebelloback.echilateral.com/api/logout',
        headers: {
            'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios(config)
        .then(function (response) {
            sessionStorage.removeItem('token');
            sessionStorage.removeItem('name');
            sessionStorage.removeItem('email');
            console.log(sessionStorage.removeItem('name'));
            window.location.reload();
        })
        .catch(function (error) {
            console.log(error);
        });

    return (
        <div>
              <Redirect from="/logout" to="/"/>
        </div>
        
    )
}