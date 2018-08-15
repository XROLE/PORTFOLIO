import express from 'express';
import bodyParser from 'body-parser';

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('I am a chosen one');
})

app.listen(port, function(){
    console.log('server started on port 3000')
});
