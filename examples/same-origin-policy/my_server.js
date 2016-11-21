"use strict";
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var PORT = process.env.PORT || 3000;
var wwwRoot = 'my_index.html';

app.use(bodyParser.json());
app.use(express.static('../../www-static'));
app.get('/', function(req, res, next) {
    res.sendFile(path.resolve(wwwRoot), function(err) {
      if (err) console.log(err);
    });
  }
);

app.listen(PORT, function() {
  console.log('Express listening on port ' + PORT);
});