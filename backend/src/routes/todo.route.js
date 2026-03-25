const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Todo route working");
});

const { getTodos, createTodo} = require('../controllers/todo.controller');
     
router.get('/', getTodos);
router.post('/', createTodo);  

module.exports = router;