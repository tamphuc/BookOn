//middlewares: req, res, next
const connection = require ("../models/database.js");
function is_username_exist( condition) {
    return function (req,res, next){
        connection.query('SELECT * FROM ACCOUNT WHERE USERNAME = ?', [req.body.username], function (err,result) {
            //result la mang
            let message ;
            let success;
            if (result.length === 0) {
                success = false;
                message = "username is not exist";
            }
            else {
                success = true;
                message = "username is exist"
            }

            if (condition === success) //signin success = true
                next();
            else
                res.json({success, message});
        })
    }
}


function is_password_correct(condition) {
    return function (req, res, next){
        connection.query('SELECT * FROM ACCOUNT WHERE USERNAME = ? and PASSWORD = ?', [req.body.username, req.body.password], function (err, result) {
            let success;
            let message;
            if (result.length === 0) {
                success = false;
                message = "password is wrong";

            }
            else {
                success = true;
                message = "password is correct";
            }

            if(success === condition)
                next()
            else
                res.json ({success, message});
        }
    )}
}

module.exports = {is_username_exist, is_password_correct};