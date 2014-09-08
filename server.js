
var express = require('express');

var app = express();

app.set('views', 'public');
app.set('view engine', 'jade');

app.get('/', function (req, res) {
  res.render('index');
});

app.use(express.static(__dirname + '/public'));





app.listen(2000);
console.log('http://localhost:2000');
