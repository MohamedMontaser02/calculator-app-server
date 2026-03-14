const express = require('express');
const path = require('path');
const app = express();

// This only serves your HTML file to the browser
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server on port 80
app.listen(80, '0.0.0.0', () => {
    console.log('Server running at http://192.168.1.50');
});