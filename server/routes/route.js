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
    
    sgMail.setApiKey(process.env.SENDGRID_API_KEY); // sending email message
        const msg = {
        to: email,
        from: 'no-reply@meetXrole.herokuapp.com',
        subject: 'MeetXrole',
        text: 'Your message was delivered successfully. Please keep an eye on your mail,we will get back to you through this medium. Thanks. Team MeetXrole',
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