import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import backContact from '../assets/images/backContact.png';
import Send from "@material-ui/icons/Send";
import EmailService from '../services/EmailService';
import { useStyles, InputField } from './styles/ContactStyles';
import BackgroundService from "../services/BackgroundService";
import Particles from './Particles';


const Contact = () => {
  const classes = useStyles();
  BackgroundService.changeBackground(`url(${backContact}) no-repeat center center fixed`);
  
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

  const sendEmail = () => {
    EmailService.enviarMail(datosEmail);
  }

  return (
    <>
      <Particles />
      <Box component="div" className={classes.contactContainer} >
        <Grid container justifyContent="flex-start" className={classes.gridContainer}>
          <Grid item xs={12} md={4}>
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
                onClick={sendEmail}
              >
                Contáctame
              </Button>
            </Box>
          </Grid>
      </Grid>
      
    </Box>
  </>
  );
};

export default Contact
