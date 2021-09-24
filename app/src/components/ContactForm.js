import React, { useState } from 'react';

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Send from "@mui/icons-material/Send";

import { useStyles, InputField } from './styles/ContactFormStyles';

const ContactForm = ({onSubmitForm}) => {
    const classes = useStyles();

    const [datosEmail, setDatosEmail] = useState({
        name: '',
        subject: '',
        message: ''
    })
    
    const handleChange = (event) => {
        setDatosEmail({
            ...datosEmail,
            [event.target.name] : event.target.value
        });
    };

    return (
        <Box component="form" className={classes.form} autoComplete='off'>
            <Typography variant="h5" className={classes.heading}>
                Escribeme y hablamos...
            </Typography>
            <InputField
                fullWidth={true}
                label="Nombre"
                variant="outlined"
                inputProps={{ className: classes.input }}
                value={datosEmail.name}
                onChange={handleChange}
                name="name"
              />
            <InputField
                fullWidth={true}
                label="Email"
                variant="outlined"
                inputProps={{ className: classes.input }}
                className={classes.field}
                value={datosEmail.subject}
                onChange={handleChange}
                name="subject"
              />
            <InputField
                fullWidth={true}
                label="Mensaje"
                variant="outlined"
                multiline
                rows={4}
                inputProps={{ className: classes.input }}
                value={datosEmail.message}
                onChange={handleChange}
                name="message"
              />
            <Button
                variant="outlined"
                fullWidth={true}
                endIcon={<Send />}
                className={classes.button}
                onClick={()=>onSubmitForm(datosEmail)}
              >
                Contáctame
            </Button>
        </Box>
    )
}

export default ContactForm
