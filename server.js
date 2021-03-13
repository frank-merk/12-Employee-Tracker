const mysql = require('mysql');
const inquirer = require('inquirer');
const functions = require('./Utils/functions');
const figlet = require('figlet');
const cTable = require('console.table');

// create the connection information for the sql database
const connection = mysql.createConnection({
  host: 'localhost',

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: 'root',

  // Your password
  password: 'stevens',
  database: 'employees_db'
});

connection.connect((err) => {
    if (err) throw err;
})