import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import avatar from '../assets/images/avatar.png';
import { useStyles } from './styles/HeaderStyles'
  
  const Header = () => {
    const classes = useStyles();
  
    return (
      <Box className={classes.typedContainer}>
        <Grid container justifyContent="center">
          <Avatar className={classes.avatar} src={avatar} alt="Alexander Gonzalez" />
        </Grid>
        <Typography className={classes.title} variant="h4">
          <Typed strings={["Alexander Gonzalez"]} typeSpeed={40} />
        </Typography>
  
        <Typography className={classes.subtitle} variant="h5">
          <Typed
            strings={[
              "Frontend Developer",
              "Backend Developer",
              "Native App Developer",
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </Typography>
      </Box>
    );
  };

export default Header
