import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { ENV } from "../lib/env.js";

export const socketAuthMiddleware = async (socket, next) => {
    try {
        // extract token from http-only cookies
        const token = socket.handshake.headers.cookie
            ?.split("; ")
            .find((row) => row.startsWith("jwt="))
            ?.split("=")[1];
        
        if (!token) {
            console.log("Socket Connection Rejected: No Token Provided");
            return next(new Error("Unauthorized - Invalid Token"));
        }

        // verify token
        const decoded = jwt.verify(token, ENV.JWT_SECRET);
        if (!decoded) {
            console.log("Socket Connection Rejected: Invalid Token");
            return next(new Error("Unauthorized - Invalid Token"));
        }

        // find user by id in database
        const user = await User.findById(decoded.userId).select("-password");
        if (!user) {
            console.log("Socket Connection Rejected: User Not Found");
            return next(new Error("User Not Found"));
        }

        // attach user to socket object
        socket.user = user;
        socket.userId = user._id.toString();
        console.log(`Socket Authenticated for User: ${user.fullName} (${user._id})`);

        next();
    } catch (error) {
        console.error("Error in Socket Authentication: ", error);
        next(new Error("Authentication Failed"));
    }
}