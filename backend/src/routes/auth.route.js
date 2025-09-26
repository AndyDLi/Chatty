import express from 'express'; // framework to build web servers & APIs
import { signup, login, logout } from '../controllers/auth.controller.js'

const router = express.Router();

// POST method routes for user authentication
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

export default router;