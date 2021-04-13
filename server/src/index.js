const express = require('express');
const morgan = require('morgan');

var createError=require('http-errors');
var path=require('path');
var cookieParser=require('cookie-parser');
var logger =  require('morgan');
require('express-async-errors');


const app = express();
app.use(morgan('dev'));

//dung de gai ma goi tin khi gui post req
app.use(express.urlencoded({extended: true}));
app.use(express.json())


app.use('/', require('./controllers/home.route'));
app.use('/account', require('./controllers/account.route'));
app.use('/admin', require('./controllers/admin.route'));
app.use('/view', require('./controllers/view.route'));

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
	console.log(`E-book web listening at http://localhost:${PORT}`)
})