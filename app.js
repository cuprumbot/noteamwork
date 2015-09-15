var path = require('path');
var express = require('express');

var app = express();

var staticPath = path.resolve(__dirname);
app.use(express.static(staticPath));

app.listen(80, function() {
  console.log('Server started.');
});