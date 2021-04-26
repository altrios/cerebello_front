import { Box, Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { CloudQueue } from '@material-ui/icons'
import React from 'react'

export const Lista = () => {
    return (
        <div>
            
            <List componet='nav'>
                <ListItem button>
                    <ListItemIcon>
                        <CloudQueue/>
                    </ListItemIcon>
                    <ListItemText primary="nube"/>
                </ListItem>
                <Divider/>
                <ListItem button>
                    <ListItemIcon>
                       
                        <Box/>
                    </ListItemIcon>
                    <ListItemText primary="cajita"/>
                </ListItem>
                <Divider/>

            </List>
            
        </div>
    )
}
export default Lista;

