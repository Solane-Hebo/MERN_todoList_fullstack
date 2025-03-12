import app from "./app.js";
import mongoose from "mongoose"

const PORT = process.env.PORT || 9999

const MONGO_URI = process.env.MONGO_URI

// Connecting to database
const dbConnect = async () => {
    try {
        const mongo = await mongoose.connect(MONGO_URI)
        console.log(`MondoBD Connected: ${mongo.connection.host}`)
    } catch (error) {
        console.log(`MongoDB connection erro: ${error.message}` )
        process.exit(1)
        
    }
}

// Start server function
const startServer = async () => {
    try {
        await dbConnect()
        app.listen(PORT, () => console.log(`Server is running on http://localhost${PORT}`))
    } catch (error) {
        console.log(`Faild to start server ${error.message}`)
        process.exit(1)
        
    }
}

startServer()