var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');

var app = express();

app.use(require('./auth'));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(require('./controllers'));

app.use(function(req, res) {
    res.status(400);
    res.render('404.html.ejs');
});

app.use(function(err, req, res, next) {
    res.status(500);
    res.render('500.html.ejs');
});


app.listen(3000, function() {
    console.log('Server listening on', 3000);
});
