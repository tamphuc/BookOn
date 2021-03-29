const express = require('express');


const single = express.Router();


single.get('/new',(req, res) => res.send("Get page to import book"));

single.post('/new',(req, res) => res.send("Post page to import book"));

single.get('/:idBook/update',(req, res) => res.send("Get page to update"));

single.post('/:idBook/update',(req, res) => res.send("Post page to update"));

single.post('/:idBook/delete',(req, res) => res.send("Post req delete book to admin"));

single.post('/:idBook/comment',(req, res) => res.send("Post cmt, update data"));

single.get('/:idBook/:idChapter', (req, res) => res.send("Get view all book "));


module.exports = single;