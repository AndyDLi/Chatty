import express from 'express'; // framework to build web servers & APIs

const router = express.Router();

// GET Request Endpoints for Backend
router.get("/send", (req, res) => {
    res.send("Send Message Endpoint");
});

export default router;