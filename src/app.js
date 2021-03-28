const express = require('express');
const morgan = require('morgan');

//handlebar một cách để tạo ra html
const exphbs  = require('express-handlebars');


const app = express();

app.use(morgan('dev'));
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


app.get('/', function (req, res){
  res.send('Hello World!')
  //res.render('home');
});

app.get('/index', function (req, res){
  res.sendFile(__dirname + '/index.html');
});


const PORT = 3000

app.listen(PORT, function() {
  console.log(`E-book web listening at http://localhost:${PORT}`)
})