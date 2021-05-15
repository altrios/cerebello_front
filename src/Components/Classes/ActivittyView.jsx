import { Grid, Box, makeStyles, Button } from '@material-ui/core'
import { Link } from "react-router-dom";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import React from 'react'
const useStyles = makeStyles((theme) => ({
    description:{
        whiteSpace: 'pre'
    }
}))

function ActivittyView(props) {
    const classes = useStyles()
    
    let title = ''
    let description = ''
    if (props.location.Activity ) {
        sessionStorage.setItem('title', props.location.Activity.title)
        sessionStorage.setItem('description', props.location.Activity.description)
        title = sessionStorage.getItem('title')
        description = sessionStorage.getItem('description')
        console.log("aca")
    } else if (sessionStorage.getItem('title')) {
        title = sessionStorage.getItem('title')
        description = sessionStorage.getItem('description')
    }

    return (
        <div className="App">
            <Button className={classes.buttonback}>
                    <Link to={{
                        pathname: '/activitypage'
                    }}>
                        <div className={classes.back}>
                            <ArrowBackIosIcon style={{ color: '#707070' }} />   <h3 style={{ margin: '0', color: '#707070' }}>Volver</h3>
                        </div>
                    </Link>
                </Button>
            <Grid>
                <Box>
            <h1>{title}</h1>
            </Box>
            <Box>
            <div>
                <span className={classes.description}>{description}</span>
            </div>
            {/*dangerouslySetInnerHTML={{__html:  */}
            </Box>
            </Grid>
        </div>
    )
}
export default ActivittyView;