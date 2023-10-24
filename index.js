var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('!Hello World!');
});

app.get('/info', function (req, res) {
  res.send('Testing response.');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening on port %s', port);
});
