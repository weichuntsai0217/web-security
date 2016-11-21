"use strict";
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.get('/data', function(req, res, next) {
    res.send('This is the data you want.')
  }
);

app.listen(PORT, function() {
  console.log('Express listening on port ' + PORT);
});