const express = require('express');
const app = express();

const requestTimeLogger = require('./requestTimeLogger');

app.get('/time', requestTimeLogger, (req, res) => {
    res.send(`Current request received at: ${req.requestTime}`);
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
