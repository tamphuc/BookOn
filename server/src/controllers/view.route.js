const express = require('express');

const view = express.Router();
const connection = require ("../models/database.js");

view.get('/name/:name', (req, res) => {
    //lay data tu get la req.params
    //bien :name

    let sql = `SELECT * FROM BOOK WHERE MATCH(NAME_OF_BOOK) AGAINST('${req.params.name}*' in boolean mode) `;
    //console.log : debug
    // res.send :tra ve cho nguoi dung
    connection.query(sql, (err, result)=>{
        res.send(result);
    })
});


view.get('/tag/:id',(req, res) => {
    let sql = `SELECT B.NAME_OF_BOOK FROM CATEGORIES_BOOK CB, BOOK B WHERE CB.ID_TAG = '${req.params.id}' and B.ID_BOOK = CB.ID_BOOK`;
    connection.query(sql, (err, result) => {
        res.send(result);
    })
});

view.get('/author/:name',(req, res) => {

    let sql = `SELECT B.NAME_OF_BOOK, A.NAME FROM ACCOUNT A, BOOK B WHERE MATCH(A.NAME) AGAINST('${req.params.name}*' in boolean mode) and B.ID_ACCOUNT = A.ID_ACCOUNT ` ;
    connection.query(sql, (err, result) => {
        res.send(result);
    })
});

view.use('/single', require('./view.single.route'));


module.exports = view;