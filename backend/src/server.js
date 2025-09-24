import dotenv from 'dotenv'; // load environment variables from .env file
import express from 'express'; // framework to build web servers & APIs
import path from 'path'; // utility for handling and transforming file paths

import authRoutes from './routes/auth.route.js'; // import auth routes
import messageRoutes from './routes/message.route.js'; // import message routes

dotenv.config();

const app = express(); // create an Express application
const PORT = process.env.PORT || 3000;
const __dirname = path.resolve(); // get the directory name of the current module

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// serve static files in production
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    });
}

// Start the Server
app.listen(PORT, () => { console.log('Server is Running on Port ' + PORT) });