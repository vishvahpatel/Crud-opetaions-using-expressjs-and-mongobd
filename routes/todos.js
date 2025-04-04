import express from "express";
import { createTodo } from "../controller/createTodo.js";
import { updateTodo } from "../controller/updateTodo.js";
import { getTodo, getTodoById } from "../controller/getTodo.js";
import { deleteTodo } from "../controller/deleteTodo.js";

const router = express.Router();

router.post("/createTodo", createTodo);
router.get("/getTodo", getTodo);
router.get("/getTodo/:id", getTodoById);
router.put("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);

export default router; 
