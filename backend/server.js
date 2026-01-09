const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require('./routes/auth');
const leadRoutes = require('./routes/leads');

app.use('/api/auth', authRoutes);
app.use('/api/leads', leadRoutes);

// Database Connection
mongoose.connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
    socketTimeoutMS: 45000,
})
.then(() => console.log('MongoDB Connected'))
.catch(err => {
    console.error('MongoDB Connection Error:');
    console.error('------------------------------------------');
    console.error(`Error Code: ${err.code}`);
    console.error(`Error Name: ${err.name}`);
    console.error('Possible Causes:');
    console.error('1. IP Whitelist issue (Use 0.0.0.0/0 in Atlas)');
    console.error('2. Firewall/ISP blocking Port 27017 (Try a different network/VPN)');
    console.error('3. Incorrect Password in .env');
    console.error('------------------------------------------');
    console.error(err.message);
});

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
