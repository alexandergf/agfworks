import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Dehaze from "@mui/icons-material/Dehaze";

import Footer from './Footer';
import { useStyles } from './styles/NavbarStyles';
import Sidebar from './Sidebar';

import SwitchThemeMode from './SwitchThemeMode';
import SwitchLanguageMode from './SwitchLanguageMode';

const Navbar = () => {

    const [openNav,setOpenNav] = useState(false);

    const classes = useStyles();
    
    return (
        <React.Fragment>
          <Box component="nav">
              <AppBar position="static" className={classes.appbar}>
              <Toolbar className={classes.toolbar}>
                  <div className={classes.left}>
                    <IconButton onClick={() => setOpenNav(true)}>
                        <Dehaze className={classes.menu} />
                    </IconButton>
                    <Typography variant="h5">
                        <Link to='/' className={classes.title}>Alexander</Link>
                    </Typography>
                  </div>
                  <div className={classes.right}>
                    <SwitchThemeMode />
                    <SwitchLanguageMode />
                  </div>
              </Toolbar>
              </AppBar>
          </Box>
          <Drawer open={openNav} anchor="left" onClose={() => setOpenNav(false)}>
              <Sidebar setOpenNav={setOpenNav} />
              <Footer />
          </Drawer>
        </React.Fragment>
    )
}

export default Navbar;
