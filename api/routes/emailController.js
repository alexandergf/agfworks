const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

const { nodemailerAJK } = require('../config/config');

router.post('/contact-email', (req, res) => {
    nodemailer.createTestAccount((err, account) => {
        let transporter = nodemailer.createTransport(nodemailerAJK);

        const htmlEmail = `
            <h3>Email recibido</h3>
            <ul>
                <li>Remitente: ${req.body.name}</li>
                <li>Email Contacto: ${req.body.subject}</li>
            </ul>
            <h4>Mensaje:</h4>
            <p>${req.body.message}</p>
        `;

        let mailOptions = {
            from: req.body.name,
            to: "alexandergonzalezf0469@gmail.com",
            subject: req.body.subject,
            text: req.body.message,
            html: htmlEmail
        };

        transporter.sendMail(mailOptions,(error, info) => {
            if(error){
                res.status(500).json({"ok": false});
            }else{
                console.log("Email enviado");
                res.status(200).json({"ok": true});
            }
        })
    });
    
});

module.exports = router;