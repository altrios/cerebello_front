import { Grid, Box, makeStyles } from '@material-ui/core'
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