const mongoose = require('mongoose');

// Schema
const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    require: [true, 'عنوان کار اجباری است'],
    trim: true,
    minLength: [5, 'عنوان کار حداقل باید 5 کاراکتر باشد'],
    maxLength: [255, 'عنوان کار حداکثر میتواند 255 کاراکتر باشد']
  },
  isCompleted: {
    type: Boolean,
    require: false,
    default: false
  }
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;