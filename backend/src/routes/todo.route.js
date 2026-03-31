const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Todo route working");
});

const { getTodos, createTodos, updateTodo, deleteTodo} = require('../controllers/todo.controller');
     
//const showLog= require('../middleware/log.middleware');
const {validateTodo} = require('../middleware/validateTodo.middleware');

router.get('/',getTodos);
router.post('/', validateTodo, createTodos);  
router.put('/:id', updateTodo);
router.delete('/:id',  deleteTodo);

module.exports = router;    