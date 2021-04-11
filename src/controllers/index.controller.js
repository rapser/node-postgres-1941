
const { Pool } = require('pg');
const { request } = require('express');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'root1983',
    database: 'firstapi',
    port: '5432'
});

const getusers = async (req, res) => {
    const response = await pool.query('SELECT * FROM users');
    console.log(response);
    res.status(200).json(response.rows);
};

const getUserById = async (req, res) => {

    const id = req.params.id;
    const response = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    console.log(response);
    res.json(response.rows);
}

const createUser = async (req, res) => {

    const { name , email } = req.body;
    const response = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email]);
    console.log(response);
    res.status(200).json({
        message: "usuario agregado",
        body: {
            user: {name, email}
        }    
    });
    res.send('user created');
};

const deleteUser = async (req, res) => {

    const id = req.params.id;
    const response = await pool.query('DELETE FROM users WHERE id = $1', [id]);
    console.log(response);
    res.json(`user ${id} deleted success`);
};

const updateUser = async (req, res) => {

    const id = req.params.id;
    const { name, email } = req.body;
    const response = await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [name, email, id]);
    console.log(response);
    res.json('user updated success');

};

module.exports = {
    getusers,
    getUserById,
    createUser,
    deleteUser,
    updateUser
}