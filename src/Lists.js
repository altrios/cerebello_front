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

                                primary="Inicio" />

                        </ListItem>
                    </Link>
                    <NavLink
                        to="/activitypage"
                        exact

                    >
                        <ListItem button >

                            <ListItemIcon>
                                <CloudQueue />
                            </ListItemIcon>
                            <ListItemText to="/activitypage"
                                exact
                                className="btn btn-dark button-menu-lateral"

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

                            primary="Eventos" />
                    </ListItem>



                </List>
            </div>


        </div>

    )
}
export default Lists;

