import mongoose from 'mongoose'; // library for MongoDB and Node.js, schema-based solution to model and structure data, mapped to MongoDB documents.
import { ENV } from '../lib/env.js'; // import environment variables

export const connectDB = async () => {
    try {
        const { MONGO_URI } = ENV;
        if (!MONGO_URI) throw new Error("MONGO_URI is not Defined");
        
        const connection = await mongoose.connect(MONGO_URI)
        console.log('MongoDB Connected: ', connection.connection.host)
    }
    catch (error) {
        console.error("Error connecting to MongoDB: ", error)
        process.exit(1); // 1 means fail, 0 means success
    }
}