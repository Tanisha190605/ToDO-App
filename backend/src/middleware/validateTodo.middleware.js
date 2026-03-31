const validateTodo = (req, res, next) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).json({ message: "all fields required"});
    }
    next();
}

module.exports={
    validateTodo,
};