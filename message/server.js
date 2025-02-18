require('dotenv').config();
const express = require('express');
const twilio = require('twilio');

const app = express();
const port = 3000;

// Middleware to parse JSON data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Function to send a message using Twilio
const sendMessageTwilio = (to, message) => {
    const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
    return client.messages.create({
        body: message,
        to: to,
        from: process.env.TWILIO_PHONE_NUMBER
    });
};

// API route to send a message
app.post('/send-message', async (req, res) => {
    const { phoneNumber, message } = req.body;

    try {
        await sendMessageTwilio(phoneNumber, message);
        res.status(200).json({ message: 'Message sent successfully using Twilio!' });
    } catch (error) {
        res.status(500).json({ message: 'Error sending message: ' + error.message });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
