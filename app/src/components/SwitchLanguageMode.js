import React from 'react';

import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';

import { useStyles } from './styles/SwitchLanguageModeStyles';
import { useTranslation } from 'react-i18next';

import spainFlag from '../assets/images/spain_flag.svg';
import ukFlag from '../assets/images/united-kingdom_flag.svg';

const SwitchLanguageMode = () => {
    const classes = useStyles();

    const {i18n} = useTranslation();

    const handleChangeLanguage = (event) => {
        i18n.changeLanguage(event.target.alt);
      };

    return (
        <ToggleButtonGroup
            className={classes.toogleButtonsGroup}
            color="primary"
            value={i18n.language}
            exclusive
            onChange={handleChangeLanguage}
            >
            <ToggleButton className={classes.toogleButtons}><img alt="es" src={spainFlag} className={classes.icon} /></ToggleButton>
            <ToggleButton value='en' className={classes.toogleButtons}><img alt="en" src={ukFlag} className={classes.icon} /></ToggleButton>
        </ToggleButtonGroup>
    )
}

export default SwitchLanguageMode
