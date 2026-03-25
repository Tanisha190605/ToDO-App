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

module.exports = { createTodos, getTodos };