const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1/todo_db').then(() => {
    console.log("Connected to Database");
}).catch(err => {
    console.log(err);
});