const express = require('express');

const router = express.Router();
const connection = require ("../models/database.js");

//input -> output
//return struct
// code theo mo hinh mvc
//model de tuong tac voi database

//router.get('/signin', (req, res) => res.send("Get sign in"));

const { is_username_exist, is_password_correct } = require("../middlewares/account_check");

router.post('/signin', is_username_exist(true), is_password_correct(true), (req, res) => {
    res.json( {success: true});


});

const { v4: uuidv4 } = require('uuid');

router.post('/signup', is_username_exist(false),(req, res) => {
        let id_account = uuidv4();
        //lay data tu post req.body
        let sql = "INSERT INTO ACCOUNT (TYPE, EMAIL, ID_ACCOUNT, USERNAME, PASSWORD, STATUS, NAME) VALUES ?";
        let value =[['User',req.body.email, id_account, req.body.username, req.body.password,'Active', 'Name']];

        connection.query(sql,[value], function (err,result){

            res.json({success:true});
        })

}
);

router.get('/signout', (req, res) => res.send("Get sign out"));


router.post('/signout', (req, res) => res.send("Post sign out"));


router.use('/profile', require('./account.profile.route'));


module.exports = router;