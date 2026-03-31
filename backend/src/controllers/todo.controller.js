const Todo = require('../models/todo.model');
const createTodos = async (req, res) => {
    try {
        const todo = await Todo.create(req.body);
        res.status(200).send("created successfully");
    }
    catch (error) {
        res.status(500).json({ "error": error.message });
    }
};

const getTodos = async (req, res) => {
    try {
        const todo = await Todo.find();        
        res.status(200).json(todo);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedTodo = await Todo.findByIdAndUpdate(id, req.body)
        res.status(200).json({message: "todo updated", data: updatedTodo});
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTodo = await Todo.findByIdAndDelete(id);
        res.status(200).json({message: "todo deleted", data: deletedTodo});
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = { createTodos, getTodos, updateTodo, deleteTodo };