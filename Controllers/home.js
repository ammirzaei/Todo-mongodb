const Todo = require("../Models/todo");

module.exports.ReadTodo = async (req, res) => {
  try {
    const countCompleted = await Todo.countDocuments({isCompleted : true});
    const todos = await Todo.find();
    res.render('index', {
      pageTitle: "کارهای روزمره",
      todos,
      countCompleted: countCompleted,
      countRemaining: todos.length - countCompleted
    });
  } catch (err) {
    console.log(err);
  }
};
