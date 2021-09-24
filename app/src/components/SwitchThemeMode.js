import React from 'react';
import { useStyles } from './styles/SwitchThemeMode';
import IconButton from "@mui/material/IconButton";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const SwitchThemeMode = () => {

    const classes = useStyles();
    // const icon = !theme ? <Brightness7Icon /> : <Brightness3Icon />;
    const icon = <Brightness7Icon />;
    return (
        <IconButton
            edge="end"
            color="inherit"
            aria-label="mode"
            className={classes.icon}
            onClick={() => alert("Switch Mode")}
          >
            {icon}
          </IconButton>
    )
}

export default SwitchThemeMode
