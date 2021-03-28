const { connection } = require("./connection.js");


//input -> output  
//return struc
// 

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
