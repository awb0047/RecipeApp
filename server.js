const express = require('express');
const mysql = require('mysql2');
const prompt = require('prompt-sync')();
const path = require('path'); // require path module for resolving file paths

// Prompt user for MySQL credentials
const mysqlUser = prompt('Enter MySQL username: ');
const mysqlPassword = prompt('Enter MySQL password: ', { echo: '*' });

const app = express();
const port = 3000;

// Serve static files from the current folder (so index.html, css, js, etc. are served)
app.use(express.static(__dirname));

// Change the root route to send the homepage (index.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Create a connection pool to MySQL using provided credentials
const pool = mysql.createPool({
    host: 'localhost',
    user: mysqlUser,      // prompted MySQL username
    password: mysqlPassword,  // prompted MySQL password
    database: 'recipe_app'
});

// Middleware to parse JSON
app.use(express.json());

// GET endpoint to fetch all recipes
app.get('/recipes', (req, res) => {
    pool.query('SELECT * FROM recipes', (err, results) => {
        if (err) {
            console.error('Error fetching recipes:', err);
            return res.status(500).json({ error: 'Server error' });
        }
        res.json(results);
    });
});

// POST endpoint to add a new recipe
app.post('/recipes', (req, res) => {
    const { title, ingredients, instructions, image_url } = req.body;
    const sql = `INSERT INTO recipes (title, ingredients, instructions, image_url) VALUES (?, ?, ?, ?)`;
    pool.query(sql, [title, ingredients, instructions, image_url], (err, results) => {
        if (err) {
            console.error('Error inserting recipe:', err);
            return res.status(500).json({ error: 'Server error' });
        }
        res.status(201).json({ id: results.insertId, ...req.body });
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});