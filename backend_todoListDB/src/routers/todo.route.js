import express from "express"
import Todos from "../models/todos.models.js"
import { createTodoList, deleteTodoList, getTodoList, getTodoListById, updateTodoList } from "../controlers/todo.controlers.js"

const router = express.Router()


//CRUD
router.post('/', createTodoList ) //create
router.get('/', getTodoList) //Read
router.get('/:id',getTodoListById) //Read
// router.put('/', ()=> {}) //update
router.patch('/:id', updateTodoList) //update
router.delete('/:id', deleteTodoList) //Delete


export default router