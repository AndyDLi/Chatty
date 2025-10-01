import express from 'express'; // framework to build web servers & APIs
import cookieParser from 'cookie-parser'; // middleware to parse cookies
import path from 'path'; // utility for handling and transforming file paths
import cors from 'cors'; // configured CORS middleware for handling cross-origin requests

import authRoutes from './routes/auth.route.js'; // import auth routes
import messageRoutes from './routes/message.route.js'; // import message routes

import { connectDB } from './lib/db.js'; // import database connection function
import { ENV } from './lib/env.js'; // import environment variables
import { app, server } from "./lib/socket.js"; // import the express app from socket.js

const PORT = ENV.PORT || 3000;
const __dirname = path.resolve(); // get the directory name of the current module

app.use(express.json({ limit: "5mb" })); // middleware to parse JSON request bodies
app.use(cors({ origin: ENV.CLIENT_URL, credentials: true })); // allows cookies to be sent from the frontend to the backend
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// serve static files in production
if (ENV.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    });
}

// Start the Server
server.listen(PORT, () => { 
    console.log('Server is Running on Port ' + PORT) 
    connectDB(); // connect to the database when the server starts
});