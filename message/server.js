require('dotenv').config();
const express = require('express');
const twilio = require('twilio');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Twilio Configuration
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// API Route to send messages
app.post('/api/send-message', async (req, res) => {
    const { phoneNumber, message } = req.body;

    try {
        await client.messages.create({
            body: message,
            to: phoneNumber,
            from: process.env.TWILIO_PHONE_NUMBER,
        });
        res.status(200).json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// Export the app for Vercel
module.exports = app;
