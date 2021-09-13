import React from 'react';
import { Link } from "react-router-dom";
import SidebarService from '../services/SidebarService';
import { useStyles } from './styles/SidebarStyles';

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";

import avatar from '../assets/images/avatar.png';

import Box from "@material-ui/core/Box";

const Sidebar = ({setOpenNav}) => {

    const menuItems = SidebarService.getMenuItems();

    const classes = useStyles();

    return (
        <Box className={classes.menuSliderContainer} component="div">
          <Avatar className={classes.avatar} src={avatar} alt="Alexander Gonzalez" />
        <Divider className={classes.divider} />
        <List>
            {menuItems.map((item, i) => (
            <ListItem
                button
                key={i}
                className={classes.listItem}
                onClick={() => setOpenNav(false)}
                component={Link}
                to={item.listPath}
            >
                <ListItemIcon className={classes.listItem}>
                {item.listIcon}
                </ListItemIcon>
                <ListItemText primary={item.listText} />
            </ListItem>
            ))}
        </List>
        </Box>
    )
}

export default Sidebar
