import { Server } from "socket.io";
import http from "http";
import express from "express";

import { ENV } from "../lib/env.js";
import { socketAuthMiddleware } from "../middleware/socket.auth.middleware.js";

const app = express();
const server = http.createServer(app);

// socket.io server with cors setup
const io = new Server(server, {
    cors: {
        origin: ENV.CLIENT_URL,
        credentials: true,
    },
});

io.use(socketAuthMiddleware);

const userSocketMap = {}; // userId -> socket.id
io.on("connection", (socket) => {
    console.log("A User Connected", socket.user.fullName);

    const userId = socket.userId;
    userSocketMap[userId] = socket.id;

    // notify all clients about online users
    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    // handle disconnection
    socket.on("disconnect", () => {
        console.log("A User Disconnected", socket.user.fullName);
        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    });
});

export { io, app, server };