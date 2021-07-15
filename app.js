var express = require('express');
var exphandlebars = require('express-handlebars');
var path = require('path');
var app = express();

app.use(express.static('public'));

app.engine('handlebars', exphandlebars());
app.set('view engine', 'handlebars');
app.get('/', function (req, res){
    res.render('home');
});


app.listen(3000);