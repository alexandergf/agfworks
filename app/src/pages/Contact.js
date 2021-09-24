import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import backContact from '../assets/images/backContact.png';
import EmailService from '../services/EmailService';
import { useStyles } from './styles/ContactStyles';
import BackgroundService from "../services/BackgroundService";
import Particles from '../components/Particles';
import ContactForm from "../components/ContactForm";
import { modalError, modalSuccess } from "../components/modals/EmailModals";
import Swal from "sweetalert2";


const Contact = () => {
  const classes = useStyles();
  BackgroundService.changeBackground(`url(${backContact}) no-repeat center center fixed`);
  
  const sendEmail = (emailData) => {
    Swal.showLoading();
    EmailService.enviarMail(emailData)
      .then((resp) => {
        Swal.hideLoading();
        resp ? modalSuccess() : modalError()
      })
      .catch(() => modalError());
  }

  
  return (
    <>
      <Particles />
      <Box component="div" className={classes.contactContainer} >
        <Grid container justifyContent="flex-start" className={classes.gridContainer}>
          <Grid item xs={12} md={4}>
            <ContactForm onSubmitForm={sendEmail} />
          </Grid>
      </Grid>
    </Box>
  </>
  );
};

export default Contact
