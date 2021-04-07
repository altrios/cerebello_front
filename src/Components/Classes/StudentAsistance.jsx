import React from 'react';
import { Input, TextField } from '@material-ui/core';

const StudentAsistance = (props) => {
const whiteSpace=' '

    
        return (
            <div className="Assistance">
                
                <TextField
          id="outlined-read-only-input"
          value={props.name +whiteSpace+ props.lastname}
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
          fullWidth='true'
        />
            </div>
        );
    
}



export default StudentAsistance;