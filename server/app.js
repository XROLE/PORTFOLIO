import dotenv from 'dotenv';
dotenv.load();
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './routes/route';


const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/', router);

const port = process.env.PORT || 5000;

app.listen(port, function(){
    console.log('server started on port ' + port)
});

export default app;
