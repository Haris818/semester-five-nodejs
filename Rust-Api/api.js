const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const users = require('./data.json');

/* GET ALL USERS */
app.get('/api/users', (req, res) => {
    res.json(users);
});

/* GET, UPDATE, DELETE USER BY ID */
app.route('/api/users/:id')

    /* GET SINGLE USER */
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find(user => user.id === id);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    })

    /* UPDATE USER */
    .patch((req, res) => {
        const id = Number(req.params.id);
        const userIndex = users.findIndex(user => user.id === id);

        if (userIndex === -1) {
            return res.status(404).json({ error: 'User not found' });
        }

        users[userIndex] = { ...users[userIndex], ...req.body };

        fs.writeFile('./data.json', JSON.stringify(users, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to update user' });
            }
            res.json({ status: 'updated', user: users[userIndex] });
        });
    })

    /* DELETE USER */
    .delete((req, res) => {
        const id = Number(req.params.id);
        const userIndex = users.findIndex(user => user.id === id);

        if (userIndex === -1) {
            return res.status(404).json({ error: 'User not found' });
        }

        users.splice(userIndex, 1);

        fs.writeFile('./data.json', JSON.stringify(users, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to delete user' });
            }
            res.json({ status: 'deleted' });
        });
    });

/* CREATE USER */
app.post('/api/users', (req, res) => {
    const body = req.body;

    if (!body.name || !body.email) {
        return res.status(400).json({ error: 'Name and Email required' });
    }

    const newUser = {
        id: users.length ? users[users.length - 1].id + 1 : 1,
        ...body
    };

    users.push(newUser);

    fs.writeFile('./data.json', JSON.stringify(users, null, 2), (err) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to save user' });
        }
        res.status(201).json({ status: 'success', user: newUser });
    });
});

/* SERVER */
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});


// Result:

// http://localhost:3000/api/users/    (for seeing)
// http://localhost:3000/api/users/   (for filtering)
// http://localhost:3000/api/users/    (for Post in json)