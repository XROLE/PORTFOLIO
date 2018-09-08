// import nodemailer from 'nodemailer';
const nodemailer = require('nodemailer');

// nodemailer.createTestAccount((err, account) => {
    
//     // let transporter = nodemailer.createTransport({
//     //     host: '153.47.227',
//     //     port: 587,
//     //     secure: false, // true for 465, false for other ports
//     //     auth: {
//     //         user: 'xrole@xrole.com.ng', // generated ethereal user
//     //         pass: 'xrolevalsido2634' // generated ethereal password
//     //     }
//     // });

//     // setup email data with unicode symbols
//     // let mailOptions = {
//     //     from: '"meetXrole" <xrole@xrole.com.ng>', // sender address
//     //     to: 'xrolediamond@gmail.com', // list of receivers
//     //     subject: 'Hello Boss ✔', // Subject line
//     //     text: 'This is just a confirmation that your message delivered successfuly. Thanks for your bold move.', // plain text body
//     // };

//     // // send mail with defined transport object
//     // transporter.sendMail(mailOptions, (error, info) => {
//     //     if (error) {
//     //         return console.log(error);
//     //     }
//     //     console.log('Message sent: %s', info.messageId);
//     //     // Preview only available when sending through an Ethereal account
//     //     console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    
//     // });
// });

// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');
const msg = {
  to: 'xrolediamond@gmail.com',
  from: 'no-reply@meetxrole.herokuapp.com',
  subject: 'MeetXrole message recieved',
  text: 'Your message have been received. We will get back to you through this mediu',
 };
sgMail.send(msg);




// Client secrete: JlBF7znzS2jdGws_fzwHqLBT
// client id: 348157679931-h4o5o927vrf66rrsa5ae3ugkmhm9bmf4.apps.googleusercontent.com
// sendgrid api key: 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