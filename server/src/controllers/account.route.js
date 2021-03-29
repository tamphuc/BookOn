const express = require('express');


const router = express.Router();


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

router.post('/signup', (req, res) => res.send("Post sign up"));

router.get('/signout', (req, res) => res.send("Get sign out"));

router.post('/signout', (req, res) => res.send("Post sign out"));

router.use('/profile', require('./account.profile.route'));


module.exports = router;