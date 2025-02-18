const express = require("express");
const router = express.Router();
const Note = require("../models/Note");
const authMiddleware = require("../middleware/auth"); // Ensure authentication

// ✅ API to Add Note
router.post("/add", authMiddleware, async (req, res) => {
    try {
        const { title, description } = req.body;
        if (!title || !description) {
            return res.status(400).json({ message: "Title and description required" });
        }
        
        const note = new Note({ title, description });
        await note.save();
        
        res.status(201).json(note);
    } catch (error) {
        console.error("Error saving note:", error);
        res.status(500).json({ message: "Server Error" });
    }
});

module.exports = router;
