import mysql from 'mysql2';
import config from './config/mysql.json';
 
// create the connection to database
const connection = mysql.createConnection({
  host: config.host,
  database: config.database,
  user: config.user, 
  password: config.password,
  //password: 1,
});

export { connection };