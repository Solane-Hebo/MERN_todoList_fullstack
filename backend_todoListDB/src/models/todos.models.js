import mongoose from "mongoose"

const todosSchema = new mongoose.Schema({
    title: {type: String, required: true},
    content: {type: String, required: true}
}, {timestamps:true})

// model
const Todos = mongoose.model('Todos', todosSchema)


export default Todos