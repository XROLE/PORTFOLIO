import { Router } from "express";
import mongoose from 'mongoose';
import Mess from '../model/messages';

mongoose.connect('mongodb://localhost/hireme');
const db = mongoose.connection;

const router = Router();

router.get('/', (req, res) => {
    res.send('Welcome to the home page. Please visit \'http://localhost:3000/portfolio/views\' to view all messages ')
});

router.get('/portfolio/views', (req, res) => {
    Mess.getMessages((err, messages) => {
        if(err){
            throw err;
        }
        res.json(messages)
    })
});

router.post('/portfolio/add/view', (req, res) => {
    res.send('Message sent succesfuly')
})

export default router;