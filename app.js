var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require("path");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function getHomePage(req, res) {
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/tutorial', function getHomePage(req, res) {
      res.sendFile(__dirname + '/views/tutorial.html');
});


app.get('/game', function getAboutPage(req, res) {
    res.sendFile(__dirname + '/views/start_game.html');
});

app.get('/point', function getPoint(req, res) {
    var body = req.body;
    console.log(body);
});

var server = app.listen(8080, function() {
    console.log('Express is running on port 8080.');
});
