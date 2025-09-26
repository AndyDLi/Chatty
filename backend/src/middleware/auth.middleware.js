import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import { ENV } from '../lib/env.js';

export const protectRoute = async (req, res, next) => {
    try {
        // check for token in cookies
        const token = req.cookies.jwt;
        if (!token) return res.status(401).json({ message: "Unauthorized: No Token Provided" });

        // verify token
        const decoded = jwt.verify(token, ENV.JWT_SECRET);
        if (!decoded) return res.status(401).json({ message: "Unauthorized: Invalid Token" });

        // verify user existence
        const user = await User.findById(decoded.userId).select("-password");
        if (!user) return res.status(404).json({ message: "User Not Found" });

        // attach user to request object
        req.user = user;
        next();
    }
    catch (error) {
        console.error("Error in Auth Middleware: ", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}