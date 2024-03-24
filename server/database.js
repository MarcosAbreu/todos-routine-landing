const dotenv = require('dotenv').config()
const mysql = require('mysql2');

const con = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'todo-db'
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = con;