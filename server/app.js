import dotenv from 'dotenv';
dotenv.load();
import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/route';


const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/', router);

const port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log('server started on port 3000')
});

export default app;
