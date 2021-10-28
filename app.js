const express = require('express');
const app = express();
var cors = require('cors');
var list = ['bob', 'ted', 'rob'];
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(cors()) // Use this after the variable declaration

app.get('/',(req, res)=>{
    res.send(list);
});

app.post('/',(req,res)=>{
    console.log(req.body);
    list.push(req.body.item);
    res.send(req.body.item);
});

app.listen(8080, ()=>{
    console.log('Listening on port 8080');
})