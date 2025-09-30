import express from 'express'; // framework to build web servers & APIs
import { protectRoute } from '../middleware/auth.middleware.js';
import { arcjetProtection } from "../middleware/arcjet.middleware.js"; // import arcjet middleware
import { getAllContacts, getChatPartners, getMessagesByUserId, sendMessage } from '../controllers/message.controller.js' // import message controllers

const router = express.Router();

router.use(arcjetProtection, protectRoute); // apply authentication middleware to all message routes

// GET method routes for messaging
router.get("/contacts", getAllContacts);
router.get("/chats", getChatPartners);
router.get("/:id", getMessagesByUserId);

// POST method route for sending a message
router.post("/send/:id", sendMessage);

export default router;