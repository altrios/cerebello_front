import { Grid, Box, makeStyles, Button, Link } from '@material-ui/core'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import React from 'react'

const useStyles = makeStyles((theme) => ({
    description:{
        whiteSpace: 'pre'
    },
    cajaTitle: {
        [theme.breakpoints.down('xs')]: {
            width: '100%',
          },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
          },
          [theme.breakpoints.up('md')]: {
            width: '100%',
          },
          [theme.breakpoints.up('lg')]: {
            width: '100%',
          }
    },
    title: {
        color: '#23d9b7',
    },
    cajaDes: {
        width: '100%',
        textAlign: 'center',
    },
    cajaMargen: {
        width: '90%',
        marginLeft:'auto',
        marginRight:'auto',
    },
    buttonback: {
        marginTop: '6vh',
        position: 'relative',
        float: 'left',
        marginLeft: '2vw',
        zIndex: '999',
        [theme.breakpoints.down('xs')]: {
            
          },
        [theme.breakpoints.down('sm')]: {
            marginTop: '0vh',
          },
          [theme.breakpoints.up('md')]: {
            marginTop: '0vh',
          },
          [theme.breakpoints.up('lg')]: {
            
          }
    },
    back: {
        display: 'flex',

    },
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
            {/* <Button className={classes.buttonback}>
                    <Link to={{
                        pathname: '/'
                    }}>
                        <div className={classes.back}>
                            <ArrowBackIosIcon style={{ color: '#707070' }} />   <h3 style={{ margin: '0', color: '#707070' }}>Volver</h3>
                        </div>
                    </Link>
                </Button> */}
                <Grid item xs={12} sm={11} lg={10}>
                <Box className={classes.cajaTitle}>
                    <h1 className={classes.title}>{title}</h1>
                </Box>
                <Box className={classes.cajaDes}>
                    <div className={classes.cajaMargen}>
                        
                         <div dangerouslySetInnerHTML={{__html: description}} />
                    </div>
                {/*dangerouslySetInnerHTML={{__html:  */}
                </Box>
            </Grid>
        </div>
    )
}
export default ActivittyView;