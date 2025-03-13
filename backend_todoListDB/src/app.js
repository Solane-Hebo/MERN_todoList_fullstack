import express from "express"
import todoRoute from "./routers/todo.route.js"
import { errorHandler, notFound } from "./middleware/error.middelware.js"


const app = express()

app.use(express.json())

app.use('/api/todos', todoRoute)

app.use(notFound) //notFound
app.use(errorHandler)

export default app