const express = require('express');


const admin = express.Router();


admin.get('/show-users', (req, res) => res.send("Get admin page and show all user is reported"));

admin.post('/delete/:id', (req, res) => res.send("Post admin page and delete user"));

admin.post('/ban/:id', (req, res) => res.send("Post admin page and ban user"));


module.exports = admin;
