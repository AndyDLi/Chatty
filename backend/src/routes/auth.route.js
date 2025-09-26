import express from 'express'; // framework to build web servers & APIs
import { signup, login, logout, updateProfile } from '../controllers/auth.controller.js' // import auth controllers
import { protectRoute } from '../middleware/auth.middleware.js'; // import auth middleware

const router = express.Router();

// POST method routes for user authentication
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.post("/update-profile", protectRoute, updateProfile);

router.get("/check", protectRoute, (req, res) => res.status(200).json(req.user));

export default router;