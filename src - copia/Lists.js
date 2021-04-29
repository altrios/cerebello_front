import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { AccountCircle, Computer, HomeRounded } from '@material-ui/icons'
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
                                <HomeRounded />
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
                                <Computer />
                            </ListItemIcon>
                            <ListItemText to="/activitypage"
                                exact
                                className="btn btn-dark button-menu-lateral"

                                primary="Clases" />



                        </ListItem>
                    </NavLink>
                    <Link to="/perfil"
                        exacr
                    >
                        <ListItem button>
                            <ListItemIcon>
                                <AccountCircle />
                            </ListItemIcon>
                            <ListItemText to="/perfil"
                                exact
                                className="btn btn-dark button-menu-lateral"

                                primary="Perfil" />
                        </ListItem>
                    </Link>

                </List>
            </div>


        </div>

    )
}
export default Lists;
