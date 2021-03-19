import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { CloudQueue } from '@material-ui/icons'
import React from 'react'
import {
    NavLink,
    Link
} from "react-router-dom";
 
export const Lists = () => {
    return (
        
            <div className="container">
                <div className="btn-group">
                    <List componet='nav'>
                    <Link
                            to="/"
                            exact

                        >
                        <ListItem button>
                            <ListItemIcon>
                                <CloudQueue />
                            </ListItemIcon>
                            <ListItemText to="/"
                                exact
                                className="btn btn-dark button-menu-lateral"
                                activeClassName="active"
                                primary="Inicio" />

                        </ListItem>
                        </Link>
                        <NavLink
                            to="/shop"
                            exact

                        >
                            <ListItem button >

                                <ListItemIcon>
                                    <CloudQueue />
                                </ListItemIcon>
                                <ListItemText to="/shop"
                                    exact
                                    className="btn btn-dark button-menu-lateral"
                                    activeClassName="active"
                                    primary="Clases" />



                            </ListItem>
                        </NavLink>
                        <ListItem button>
                            <ListItemIcon>
                                <CloudQueue />
                            </ListItemIcon>
                            <ListItemText to="/events"
                                exact
                                className="btn btn-dark button-menu-lateral"
                                activeClassName="active"
                                primary="Eventos" />
                        </ListItem>



                    </List>
                </div>
           

            </div>
        
    )
}
export default Lists;

