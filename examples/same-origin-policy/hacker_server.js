"use strict";
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.get('/', function(req, res, next) {
    res.send('<p>Hello World!</p>')
    // res.sendFile(path.resolve(wwwRoot), function(err) {
    //   if (err) console.log(err);
    // });
  }
);

app.listen(PORT, function() {
  console.log('Express listening on port ' + PORT);
});