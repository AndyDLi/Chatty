import User from "../models/User.js";
import bcrypt from 'bcryptjs'; // library to hash passwords
import { generateToken } from "../lib/utils.js"; // function to generate JWT token

export const signup = async (req, res) => {
    const { fullName, email, password } = req.body;

    try {
        if (!fullName || !email || !password) {
            return res.status(400).json({message: "All Fields Are Required"});
        }

        if (password.length < 6) {
            return res.status(400).json({message: "Password Must Be At Least 6 Characters Long"});
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // regex for email validation
        if (!emailRegex.test(email)) {
            return res.status(400).json({message: "Invalid Email Format"});
        }

        // check if user already exists
        const user = await User.findOne({email});
        if (user) return res.status(400).json({message: "Email Already Exists"});

        // password hashing
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // creates new user with provided properties
        const newUser = new User({
            fullName,
            email,
            password: hashedPassword
        });

        if (newUser) {
            generateToken(newUser._id, res);
            await newUser.save(); // save user to database

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                email: newUser.email,
                profilePic: newUser.profilePic,
            });
        }
        else {
            res.status(400).json({message: "Invalid User Data"});
        }
    }
    catch (error) {
        console.error("Error in Signup Controller: ", error);
        res.status(500).json({message: "Internal Server Error"});
    }
}