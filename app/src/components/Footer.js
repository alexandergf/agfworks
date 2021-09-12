import React from 'react'
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import GitHub from "@material-ui/icons/GitHub";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Instagram from "@material-ui/icons/Instagram";
import { useStyles } from './styles/FooterStyles';
import Link from '@material-ui/core/Link';

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
