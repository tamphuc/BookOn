// get the client import libarry 
const mysql = require('mysql2');
const config = require('./config/mysql.json');
 
// create the connection to database

const connection = mysql.createConnection({
  host: config.host,
  database: config.database,
  user: config.user, 
  password: config.password,
});

module.exports = { connection }
