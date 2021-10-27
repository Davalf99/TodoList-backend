const express = require('express');
const app = express();
var cors = require('cors')

app.use(cors()) // Use this after the variable declaration

app.get('/',(req, res)=>{
    res.send('Hello there');
})

app.listen(8080, ()=>{
    console.log('Listening on port 8080');
})