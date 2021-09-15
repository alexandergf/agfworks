import React from 'react';
import Header from '../components/Header';
import imageBackground from '../assets/images/back.gif';
import { useStyles } from './styles/HomeStyles';
import BackgroundService from '../services/BackgroundService';

const Home = () => {
    const classes = useStyles();
    BackgroundService.changeBackground(`url(${imageBackground}) no-repeat center center fixed`);
    return (
        <React.Fragment>
            <Header className={classes.contactContainer} />
        </React.Fragment>
    )
}

export default Home
