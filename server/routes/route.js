import { Router } from "express";
import mongoose from 'mongoose';
import Message from '../model/messages';

mongoose.connect('mongodb://localhost/hireme', { useNewUrlParser: true } );
const db = mongoose.connection;

const router = Router();

router.get('/', (req, res) => {
    res.send('Welcome to the home page. Please visit \'http://localhost:3000/portfolio/views\' to view all messages ')
});

router.post('/portfolio/views', (req, res) => {
    const message = req.body;
 Message.postMessage(message, (err, message) => {
     if (err){
         throw err;
     }
     res.json(message)
 })
})

router.get('/portfolio/views', (req, res) => {
    Message.postMessage((err, messages) => {
        if(err){
            throw err;
        }
        res.json(messages)
    })
});



export default router;