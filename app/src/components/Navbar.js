import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Dehaze from "@material-ui/icons/Dehaze";
import AssignmentInd from "@material-ui/icons/AssignmentInd";
import Home from "@material-ui/icons/Home";
import Apps from "@material-ui/icons/Apps";
import ContactMail from "@material-ui/icons/ContactMail";
import Footer from './Footer';
import avatar from '../assets/images/avatar.png';
import { LaptopChromebook } from '@material-ui/icons';
import { useStyles } from './styles/NavbarStyles';

const menuItems = [
    { listIcon: <Home />, listText: "Inicio", listPath: "/" },
    { listIcon: <AssignmentInd />, listText: "Experiencia", listPath: "/experience" },
    { listIcon: <LaptopChromebook />, listText: "Estudios", listPath: "/studies" },
    { listIcon: <Apps />, listText: "Proyectos", listPath: "/projects" },
    { listIcon: <ContactMail />, listText: "Contacto", listPath: "/contact" },
  ];

const Navbar = () => {

    const [openNav,setOpenNav] = useState(false);

    const classes = useStyles();

    const sideList = () => (
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
    );

    return (
        <React.Fragment>
          <Box component="nav">
              <AppBar position="static" className={classes.appbar}>
              <Toolbar>
                  <IconButton onClick={() => setOpenNav(true)}>
                    <Dehaze className={classes.menu} />
                  </IconButton>
                  <Typography variant="h5">
                      <Link to='/' className={classes.title}>Alexander</Link>
                  </Typography>
              </Toolbar>
              </AppBar>
          </Box>
          <Drawer open={openNav} anchor="left" onClose={() => setOpenNav(false)}>
              {sideList()}
              <Footer />
          </Drawer>
        </React.Fragment>
    )
}

export default Navbar;
