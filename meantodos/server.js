var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var ejs = require('ejs');
var app = new express();
var index = require('./routes/index');
var todos = require('./routes/todos');

//  set views .
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/', index);
app.use('/api/v1', todos);

app.listen(3000, function(req, res, next) {
    console.log("server started at 3000...");

});
