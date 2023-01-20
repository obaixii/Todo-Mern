import express from "express";
import {
    createTodo,
    getAllTodo,
    getTodoById,
    updateTodo,
    deleteTodo
} from "../controller/todoControllers.js";


const router = express.Router();

router.route('/new-todo').post(createTodo);
router.route('/todos').get(getAllTodo);
router.route('/todo/:id').get(getTodoById);
router.route('/update-todo/:id').put(updateTodo);
router.route('/delete-todo/:id').delete(deleteTodo);

export default router ; 