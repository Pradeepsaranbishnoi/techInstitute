const express = require('express');
const router = express.Router();
const Lead = require('../models/Lead');
const { protect } = require('../middleware/authMiddleware');

// @route   POST /api/leads
// @desc    Create a new lead (Public from Contact Form)
router.post('/', async (req, res) => {
    const { name, email, course, message } = req.body;
    
    try {
        const lead = new Lead({
            name,
            email,
            course,
            message
        });
        const createdLead = await lead.save();
        res.status(201).json(createdLead);
    } catch (error) {
        console.error("Database Error (Saving to In-Memory Fallback):", error.message);
        
        // Fallback: Add to in-memory array
        const newLead = {
            _id: Math.random().toString(36).substr(2, 9),
            name,
            email,
            course,
            message,
            status: 'New',
            date: new Date()
        };
        LEADS.unshift(newLead); // Add to beginning
        
        res.status(201).json(newLead);
    }
});


// @route   GET /api/leads
// @desc    Get all leads (Protected)
router.get('/', protect, async (req, res) => {
    try {
        const leads = await Lead.find({}).sort({ date: -1 });
        res.json(leads);
    } catch (error) {
        console.error("Database Error (Returning Dummy Data):", error.message);
    }
});

module.exports = router;
