const mongoose = require('mongoose');

const LeadSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    course: { type: String },
    message: { type: String },
    status: { type: String, default: 'New' },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Lead', LeadSchema);
