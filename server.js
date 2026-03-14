const express = require('express');
const path = require('path');
const app = express();

// CRITICAL: This allows the browser to find 'mqtt.min.js' in the same folder
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(80, '0.0.0.0', () => {
    console.log('Server running at http://192.168.1.50');
});