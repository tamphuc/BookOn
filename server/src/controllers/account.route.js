const express = require('express');


const router = express.Router();
const connection = require ("../models/database.js");

//input -> output
//return struct
// code theo mo hinh mvc
//model de tuong tac voi database

router.get('/signin', (req, res) => res.send("Get sign in"));

const { is_username_exist, is_password_correct } = require("../middlewares/signin_check");

router.post('/signin', is_username_exist, is_password_correct, (req, res) => {
    res.redirect('/');
});


router.get('/signup', (req, res) => res.send("Get sign up"));

const { v4: uuidv4 } = require('uuid');

router.post('/signup', (req, res) => {
        let id_account = uuidv4();
        //lay data tu post req.body
        let sql = "INSERT INTO ACCOUNT (TYPE, EMAIL, ID_ACCOUNT, USERNAME, PASSWORD, STATUS, NAME) VALUES ?";
        let value =[['User',req.body.email, id_account, req.body.username, req.body.password,'Active', req.body.name]];
        console.log(req.body);

        connection.query(sql,[value], function (err,result){
            console.log(err);
            console.log(result);
        })

    }

);



router.get('/signout', (req, res) => res.send("Get sign out"));

router.post('/signout', (req, res) => res.send("Post sign out"));

router.use('/profile', require('./account.profile.route'));


module.exports = router;