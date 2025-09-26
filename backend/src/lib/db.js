import mongoose from 'mongoose'; // library for MongoDB and Node.js, schema-based solution to model and structure data, mapped to MongoDB documents.

export const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI)
        console.log('MongoDB Connected: ', connection.connection.host)
    }
    catch (error) {
        console.error("Error connecting to MongoDB: ", error)
        process.exit(1); // 1 means fail, 0 means success
    }
}