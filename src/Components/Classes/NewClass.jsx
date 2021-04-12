import { List, ListItem, TextField, makeStyles, Grid } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(() => ({
    listStyle: {
        marginTop: '-20px',
        width: '80%'
    }

}));
let text = [{
    title: "<h1>hola</h1>",
}]

const NewClass = () => {
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
                                           {/** <div dangerouslySetInnerHTML={{__html: data.title}} />*/ }
                                           
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
                </form>
            </Grid>
        </div>
    );
}


export default NewClass;