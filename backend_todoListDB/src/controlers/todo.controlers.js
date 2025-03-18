import mongoose from 'mongoose';
import Todos from "../models/todos.models.js";
import asyncHandler from "express-async-handler"

// CRUD

// Create
export const createTodoList = asyncHandler(async(req, res, next) =>{
    const { title, content } = req.body


    if(!title && !content) {
        return res.status(400).json({message: "Title and content are required"})
    }

    const todoList = await Todos.create({title, content})
    res.status(201).json(todoList)
})

// ReadAll
export const getTodoList = asyncHandler(async(req, res, next) => {
    const todoList = await Todos.find().exec()
    res.status(200).json(todoList)
})


// ReadOne
export const getTodoListById = asyncHandler(async(req, res, next) =>{
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({message: "Invalid Id"})
    }

    const todoList = await Todos.findById(id).exec()

    if(!todoList){
        return res.status(400).json({message: "TodoList not found"})
    }

    res.status(200).json(todoList)
})


// Update
export const updateTodoList = asyncHandler( async(req, res, next) => {
    const {id} = req.params
    const {title, content} = req.body
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({message: "Invalid Id"})
}
 
 const toUpdate = {}
 if(title) toUpdate.title = title
 if(content) toUpdate.content = content

 if(Object.keys(toUpdate).length === 0){
    res.status(400).json({message: "No changes provided"})
 }

 const updateTodoList = await Todos.findByIdAndUpdate(id, toUpdate, {new: true})
    if(!updateTodoList){
        return res.status(400).json({message: "TodoList not found"})
    }
 res.status(200).json({updateTodoList})
})


//Delete
export const deleteTodoList = asyncHandler(async(req, res, next)=> {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({message: "Invalid Id"})
    }

    const todoList = await Todos.findByIdAndDelete(id).exec()
    if(!todoList){
        return res.status(400).json({message: "TodoList not found"})
    }

       res.sendStatus(204)
})





