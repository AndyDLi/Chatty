import mongoose from 'mongoose';

// User Schema
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
    },
    profilePic: {
        type: String,
        default: "",
    },
    }, 
    { timestamps: true } // createdAt & updatedAt fields
);

const User = mongoose.model("User", userSchema); // creates a User model based on the userSchema

export default User;