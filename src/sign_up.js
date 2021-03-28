const { connection } = require("./connection.js");


function random_id_account(){
    let id;

    return
}
function sign_up(email,id_account, username, password, name ) {
    // with placeholder
    connection.query(
        'SELECT * FROM ACCOUNT WHERE USERNAME=?',
        [username],
        function(err, results) {
            if (results.length > 0) {
                console.log("User is already existed!");
                return;
            }
            
            connection.query(

                `INSERT INTO ACCOUNT(TYPE, EMAIL,ID_ACCOUNT, USERNAME, PASSWORD, NAME) VALUES ("User", "${email}","${id_account}" "${username}", "${password}", "${name}")`,
                function(err, results) {
                    console.log(err);
                    console.log(results);
                    console.log('insert 1 row');
                    connection.query(
                        'SELECT * FROM ACCOUNT WHERE USERNAME = ? ',
                        [username],
                        function(err, results) {
                            console.log(results[0])
                        })
                })
            }
        
    );
}

sign_up('tamphuc@gmail.com', 'tamphuc1234', '1234', 'Tam Phuc');

