import React from 'react';
import { Link } from "react-router-dom";
import SidebarService from '../services/SidebarService';
import { useStyles } from './styles/SidebarStyles';

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import { useTranslation } from 'react-i18next';

import avatar from '../assets/images/avatar.png';

const Sidebar = ({setOpenNav}) => {

    const menuItems = SidebarService.getMenuItems();

    const classes = useStyles();

    const {t} = useTranslation('global');

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
                <ListItemText primary={t("sidebar."+item.listText)} />
            </ListItem>
            ))}
        </List>
        </Box>
    )
}

export default Sidebar
