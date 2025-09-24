import express from 'express'; // framework to build web servers & APIs

const router = express.Router();

// GET Request Endpoints for Backend
router.get("/signup", (req, res) => {
    res.send("Signup Endpoint")
});

router.get("/login", (req, res) => {
    res.send("Login Endpoint")
});

router.get("/logout", (req, res) => {
    res.send("Logout Endpoint")
});

export default router;