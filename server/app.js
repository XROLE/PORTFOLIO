const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 3000;

app.get('/', function(req, res){
    res.send('I am a chosen one');
})

app.listen(port, function(){
    console.log('server started on port 3000')
});