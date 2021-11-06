const express = require('express');
const app = express();
var cors = require('cors');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/TodoList');


var list = ['bob', 'ted', 'rob'];
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(cors()) // Use this after the variable declaration

const todoItemSchema = new mongoose.Schema({
    task: String
  });

const TodoItem = mongoose.model('TodoItem', todoItemSchema);


app.get('/',(req, res)=>{
    TodoItem.find((err, items)=>{
        if(err){
            console.log(err);
        }else{
            res.send(items)
        }
    });
});


app.post('/',(req,res)  => {
    const item = new TodoItem({ task: req.body.item });
    item.save();
    res.send(req.body.item);
    
    console.log(req.body);
});

app.listen(8080, ()=>{
    console.log('Listening on port 8080');
})