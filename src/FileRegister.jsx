import { Button } from '@material-ui/core';
import axios from 'axios';
import React, { useState } from 'react'
import readXlsxFile from 'read-excel-file'
import parseJson  from 'parse-json'


const FileRegister = (props) => {
    const [userData, setUserData] = useState([])
    let jsonUser = [{
        name:'',
        email:'',
        password:'',
        c_password:'',
        user_role:'student'

    }]
    const [file, setFiles] = useState(null)
    let arrayData=[];
    const uploadFile =  (e) => {
        setFiles(e.target.files[0]);

        readXlsxFile(e.target.files[0]).then((rows) => {
            rows.map((item, i) => {
                item.map((data, index) => {
                    if (index === 0) {
                        
                        jsonUser[0].name = data;
                    } else if (index === 1) {
                        
                        jsonUser[0].email = data;
                    } else if (index === 2) {
                        
                        jsonUser[0].password = data;
                    } else if (index === 3) {
                        
                        jsonUser[0].c_password = data;
                    }

                    /* console.log(data)*/
                })
                console.log(JSON.stringify({
                    "name": "Fernando David Martínez",
                    "email": "famartinez.ti2@gmail.com",
                    "password": "fernando1",
                    "c_password": "fernando1",
                    "user_role": "student"
                  }))
                  console.log(jsonUser[0])
                var data = JSON.stringify(jsonUser[0]);
                  
                  var config = {
                    method: 'post',
                    url: 'http://cerebelloback.echilateral.com/api/register',
                    headers: { 
                      'Content-Type': 'application/json'
                    },
                    data : data
                  };
                  
                  axios(config)
                  .then(function (response) {
                    console.log(JSON.stringify(response.data));
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
                
            })
            
        })

    }
    
    const insertFile = async () => {
        const f = new FormData();
        f.append('file', file.target.files[0]);
        await axios.post('http://cerebelloback.echilateral.com/api/register', f)
            .then(response => {
                console.log(response.data);
            }).catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="App">
            <label htmlFor="upload-photo">
                <input

                    id="upload-photo"
                    name="upload-photo"
                    type="file"
                    onChange={uploadFile}

                />


            </label>
            <Button color="primary" variant="contained" component="span" onClick={() => insertFile()}>
                Subir Estudiantes
  </Button>

        </div>
    )

}



export default FileRegister;