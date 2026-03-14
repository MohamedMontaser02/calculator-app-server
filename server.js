const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Run with 'sudo node server.js' to use port 80
app.listen(80, '0.0.0.0', () => {
    console.log('Control panel ready at http://192.168.1.50');
});