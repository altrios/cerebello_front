import React, { useState } from "react";
import { Input, makeStyles, TextField } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
const useStyle = makeStyles((theme) => ({
  true: {
    color: 'green'
  },
  false: {
    color: 'red'
  },

}))

const StudentAsistance = (props) => {
  const whiteSpace = ' '
  const classes = useStyle();
  let assistance = [{ assist: props.assistance }];


  return (
    <div className="Assistance">



      <TextField
        id="outlined-read-only-input"
        value={props.name + whiteSpace + props.lastname}
        defaultValue="Hello World"
        InputProps={{
          readOnly: true,
        }}

        variant="outlined"
        xs={10}
      />
            {
                            assistance.map((data, index) => {
                                
                                   
                                      if(data.assist=='true'){
                                        return <CheckCircleOutlineIcon className={classes.true}/>;
                                      }else{
                                        return <CheckCircleOutlineIcon className={classes.false}/>;
                                      }
                                      
                                    
                                
                            })
                        }
      
    </div>
  );

}



export default StudentAsistance;