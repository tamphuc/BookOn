//middlewares: req, res, next
const connection = require ("../models/database.js");
function is_username_exist(req, res, next) {
    connection.query('SELECT * FROM ACCOUNT WHERE USERNAME = ?', [req.body.username], function (err,result){
       console.log(err);
       console.log(result);
       console.log(req.body);

        if(result.length === 0) {
            console.log('failed');
            return {result: false, message: "username is not exist"};
        }
        console.log('passed');
        next();
    }
)
}
function is_password_correct(req, res, next) {


    connection.query('SELECT * FROM ACCOUNT WHERE USERNAME = ? and PASSWORD = ?', [req.body.username, req.body.password], function (err, result){
            if(result.length === 0) {
                console.log('failed password');

                return {result: false, message: "password is wrong"};
            }
            console.log('passed password');
            next();
        }
    )
}
module.exports = {is_username_exist, is_password_correct};