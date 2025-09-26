import Message from "../models/Message.js"; // import Message schema model
import User from "../models/User.js"; // import User schema model
import cloudinary from "../lib/cloudinary.js"; // import cloudinary instance

export const getAllContacts = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;
        const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");
        res.status(200).json(filteredUsers);
    }
    catch (error) {
        console.error("Error in getAllContacts: ", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export const getMessagesByUserId = async (req, res) => {
    try {
        const myId = req.user._id;
        const { id:userToChatId } = req.params;

        // fetches messages between users
        const messages = await Message.find({
            $or: [
                { senderId: myId, receiverId: userToChatId },
                { senderId: userToChatId, receiverId: myId }
            ]
        });

        res.status(200).json(messages);
    }
    catch (error) {
        console.error("Error in getMessagesByUserId: ", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export const sendMessage = async (req, res) => {
    try {
        const { text, image } = req.body;
        const senderId = req.user._id;
        const { id: receiverId } = req.params;

        let imageUrl;
        if (image) {
            // upload to cloudinary
            const uploadResponse = await cloudinary.uploader.upload(image);
            imageUrl = uploadResponse.secure_url;
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            text,
            image: imageUrl,
        });

        await newMessage.save()
        
        // TODO: send message in real-time using sockets
        
        res.status(201).json(newMessage);
    }
    catch (error) {
        console.error("Error in sendMessage: ", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export const getChatPartners = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;

        // find all messages where the logged-in user is either the sender or receiver
        const messages = await Message.find({
            $or: [
                { senderId: loggedInUserId },
                { receiverId: loggedInUserId }
            ],
        });

        // extract chat partner depending on whether the user is sender or receiver
        // array of unique chat partner IDs
        const chatPartnersIds = [
            ...new Set(messages.map(msg => 
                msg.senderId.toString() === loggedInUserId.toString() 
                    ? msg.receiverId.toString() 
                    : msg.senderId.toString())
            )
        ];

        const chatPartners = await User.find({ _id: { $in: chatPartnersIds } }).select("-password");

        res.status(200).json(chatPartners);
    }
    catch (error) {
        console.error("Error in getChatPartners: ", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}