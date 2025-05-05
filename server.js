const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static('public'));

// Простые учетные данные для демонстрации
const validCredentials = {
    username: 'admin',
    password: 'password123'
};

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === validCredentials.username && password === validCredentials.password) {
        res.json({ success: true });
    } else {
        res.status(401).json({ success: false, message: 'Неверные учетные данные' });
    }
});

// Endpoint to save phone number
app.post('/save-phone', (req, res) => {
    const { phoneNumber } = req.body;
    const timestamp = new Date().toISOString();
    const data = `${timestamp}: ${phoneNumber}\n`;

    fs.appendFile('phone_numbers.txt', data, (err) => {
        if (err) {
            console.error('Error saving phone number:', err);
            res.status(500).json({ error: 'Failed to save phone number' });
            return;
        }
        res.json({ success: true });
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 