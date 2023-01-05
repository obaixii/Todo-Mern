import { Todos } from "../model/todoSchema.js";

// Create Todo Controller/Middleware/Function
export const createTodo = async (req, res, next) => {
    try {
        await Todos.create(req.body);
        res.json({
            message:"Todo has been Created successfully"
        });
    } catch (error) {
        next(error)
    }
};

// Get All Todo Controller/Middleware/Function
export const getAllTodo = async (req, res, next) => {
    const todos = await Todos.find(req.body);
    res.json(todos);
};

// Get Single Todo Controller/Middleware/Function
export const getTodoById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const todo = await Todos.findById(id);
        res.json(todo);
    } catch (error) {
        next(error)
    }
};

// Update Todo Controller/Middleware/Function
export const updateTodo = async (req, res, next) => {
    try {
        const { id } = req.params;
        await Todos.findByIdAndUpdate(id, req.body);
        res.send("Todo has been Updated successfully ");
    } catch (error) {
        next(error)
    }
};

// Delete Todo Controller/Middleware/Function
export const deleteTodo = async (req, res, next) => {
    try {
        const { id } = req.params;
        const todo = await Todos.findById(id);
        todo.delete()
        res.json("Todo has been Deleted successfully")
    } catch (error) {
        next(error)
    }
};