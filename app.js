var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require("path");
var question ;
var fs = require('fs');
var obj;
var score ;
var jsonScore;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


fs.readFile('./question.json', 'utf8', function (err, data) {
  if (err) throw err;
  question = JSON.parse(data);
});

app.get('/', function getHomePage(req, res) {
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/tutorial_game', function getAboutPage(req, res) {
    res.sendFile(__dirname + '/views/tutorial_game.html');
});

app.get('/game', function getAboutPage(req, res) {
    res.sendFile(__dirname + '/views/game.html');
});

app.post('/point', function getPoint(req, res) {
    score = req.body.scorename;
    res.sendFile(__dirname + '/views/score.html');

});

app.get('/question', function (req, res) {
     res.json(question);

});

app.get('/get_score', function (req, res) {
     jsonScore={"score" : score}
     res.json(jsonScore);

});

var server = app.listen(8080, function() {
    console.log('Express is running on port 8080.');
});
