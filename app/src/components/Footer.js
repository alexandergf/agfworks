import React from 'react'
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Instagram from "@mui/icons-material/Instagram";
import { useStyles } from './styles/FooterStyles';
import Link from '@mui/material/Link';

const Footer = () => {
    const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <Link href="https://github.com/alexandergf" target="_blank"><BottomNavigationAction icon={<GitHub />} className={classes.root} /></Link>
      <Link href="https://www.linkedin.com/in/alexander-gonzalez-ferreiro/" target="_blank"><BottomNavigationAction icon={<LinkedIn />} className={classes.root} /></Link>
      <Link href="https://www.instagram.com/alexandergf1996/" target="_blank"><BottomNavigationAction icon={<Instagram />} className={classes.root} /></Link>
    </BottomNavigation>
  );
}

export default Footer
