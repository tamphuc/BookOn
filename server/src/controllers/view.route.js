const express = require('express');


const view = express.Router();


view.get('/name/:name',(req, res) => res.send("Get view all book by name of book"));

view.get('/tag/:id',(req, res) => res.send("Get view all book by id_tag"));

view.get('/author/:id',(req, res) => res.send("Get view all book by id_author"));

view.use('/single', require('./view.single.route'));


module.exports = view;