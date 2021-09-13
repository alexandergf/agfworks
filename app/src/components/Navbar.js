import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Dehaze from "@material-ui/icons/Dehaze";
import Footer from './Footer';
import { useStyles } from './styles/NavbarStyles';
import Sidebar from './Sidebar';

const Navbar = () => {

    const [openNav,setOpenNav] = useState(false);

    const classes = useStyles();

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
              <Sidebar setOpenNav={setOpenNav} />
              <Footer />
          </Drawer>
        </React.Fragment>
    )
}

export default Navbar;
