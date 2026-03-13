const express = require('express');
const path = require('path');
const app = express();

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server on port 80
// Note: You must run this with 'sudo' to use port 80
app.listen(80, '0.0.0.0', () => {
    console.log('Calculator server running at http://10.42.0.1');
});	
