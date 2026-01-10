const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// configure session middleware
app.use(session({
    secret: 'mysecretkey',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));

// Home route
app.get('/', (req, res) => {
    res.send('Welcome to the Home Page!');
});

// Set a cookie
app.get('/set-cookie', (req, res) => {
    res.cookie('username', 'Haris', { maxAge: 60000 });
    res.send('Cookie has been set!');
});

// Get cookie
app.get('/get-cookie', (req, res) => {
    const username = req.cookies.username || 'Guest';
    res.send(`Hello ${username}, this is your cookie!`);
});

// Set session
app.get('/set-session', (req, res) => {
    req.session.user = { name: 'Haris', role: 'Developer' };
    res.send('Session has been set!');
});

// Get session
app.get('/get-session', (req, res) => {
    if (req.session.user) {
        res.send(`Hello ${req.session.user.name}, your role is ${req.session.user.role}`);
    } else {
        res.send('No session found. Please visit /set-session first.');
    }
});

// Destroy session
app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.send('Error destroying session');
        }
        res.send('Session destroyed. You are logged out!');
    });
});

// Start server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});


//Home
//http://localhost:3000/

//Cookie set
👉 http://localhost:3000/set-cookie

//Session set
👉 http://localhost:3000/set-session

//Session get
//http://localhost:3000/get-session

//Logout (session destroy)
// http://localhost:3000/logout