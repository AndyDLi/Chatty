import dotenv from 'dotenv'; // load environment variables from .env file
import express from 'express'; // framework to build web servers & APIs

import authRoutes from './routes/auth.route.js'; // import auth routes
import messageRoutes from './routes/message.route.js'; // import message routes

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes)

// Start the Server
app.listen(PORT, () => { console.log('Server is Running on Port ' + PORT) });