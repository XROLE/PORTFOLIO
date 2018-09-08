import dotenv from 'dotenv';
dotenv.load();
import { Router } from "express";
const sgMail = require('@sendgrid/mail');
import mongoose from 'mongoose';
import Message from '../model/messages';

mongoose.connect(process.env.DB_URI_dev, { useNewUrlParser: true } );
const db = mongoose.connection;

const router = Router();

router.get('/', (req, res) => {
    res.send('Welcome to the HOME page. Please visit \'http://localhost:3000/portfolio/views\' to view all messages ')
});

router.post('/portfolio/views', (req, res) => {
    const message = req.body;
    const email = req.body.email;
    console.log(email); // Out putting mail to make sure the body gets the email

    sgMail.setApiKey(process.env.SENDGRID_API_KEY); // sending email message
        const msg = {
        to: 'xrolediamond@gmail.com',
        from: 'meetXrole@gmail.com',
        subject: 'MeetXrole message recieved',
        text: 'I am a chosen one',
    };
    sgMail.send(msg);
 Message.postMessage(message, (err, message) => {
     if (err){
         throw err;
     }
     res.json({ success: "Message sent succesfuly", message});
 })
});

router.get('/portfolio/views', (req, res) => {
    Message.getMessages((err, messages) => {
        if(err){
            throw err;
        }
        res.json(messages)
    })
});



export default router;