// get the client import libarry 
const mysql = require('mysql2');
 
// create the connection to database
const connection = mysql.createConnection({
  host: 'remotemysql.com',
  database: 't7gVsdCmN9',
  user: 't7gVsdCmN9', 
  password: 'DUR4NwvPzu',
});

function checkUser(username, password) {

    // with placeholder
    connection.query(
        'SELECT * FROM `ACCOUNT` WHERE `USERNAME`=?',
        [username],
        function(err, results) {
            console.log(results[0]);
            console.log(results[0].USERNAME);

            if (password === results[0].PASSWORD);
                console.log(results[0].PASSWORD);
        }
    );
}
 
checkUser('admin','admin1234');


