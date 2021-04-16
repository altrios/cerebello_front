import React from 'react';
import { Box, Grid, makeStyles, ListItemIcon} from "@material-ui/core";
import { Build } from '@material-ui/icons';



const useStyles = makeStyles((theme) => ({

    containerPerfil: {
        with: '50%',
    },
    title: {
        textAlign: 'center',
        width: '100%',
        display: 'block',
        fontSize:'1.5rem',
        color: '#E4E4E4',
      },
      ContainerCenter: {
        Dispaly: 'block',
        width: '50%',
        heigh: '10%',
        margin: 'auto',
        marginTop: '15vh',
        padding: 'auto',
      },

}));

function Perfil () {

    const classes = useStyles();

    return (  

        <div className=" App ">
            <Grid container xs={12}>
                <Box className={classes.ContainerCenter}>
                    <div className={classes.containerPerfil, classes.title}>
                        <h3>Estamos Trabajando en Esto</h3>
                    </div>
                    <ListItemIcon>
                        <Build style={{color:"#E4E4E4", fontSize:"20vw"}} />
                    </ListItemIcon>
                </Box>
            </Grid>
        </div >

    );
}
 
export default Perfil;