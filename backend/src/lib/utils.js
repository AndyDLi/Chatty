import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
    const { JWT_SECRET } = process.env;
    if (!JWT_SECRET) throw new Error("JWT_SECRET is not Defined");

    const token = jwt.sign({ userId }, JWT_SECRET, {
        expiresIn: "7d",
    });

    res.cookie("jwt", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true, // prevent XSS attacks by restricting access to the cookie from client-side scripts
        sameSite: "strict", // CSRF protection
        secure: process.env.NODE_ENV === "development" ? false : true, // ensure cookie is only sent over HTTPS in production
    });

    return token;
};