const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
};

// @route   POST /api/auth/login
// @desc    Auth user & get token
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    const adminUser = process.env.ADMIN_USER || 'admin';
    const adminPass = process.env.ADMIN_PASS || 'password123';

    if (username === adminUser && password === adminPass) {
        res.json({
            _id: '1',
            username: username,
            token: generateToken('1'),
        });
    } else {
        res.status(401).json({ message: 'Invalid username or password' });
    }
});

module.exports = router;
