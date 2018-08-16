import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.send('Welcome to the home page. Please visit \'http://localhost:3000/portfolio/views\' to view all messages ')
});

router.get('/portfolio/views', (req, res) => {
    res.send('these are the list of messages available');
});

router.post('/portfolio/add/view', (req, res) => {
    res.send('Message sent succesfuly')
})

export default router;