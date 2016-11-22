"use strict";
var express = require('express');
var bodyParser = require('body-parser');
var sanitizer = require('sanitizer')
var path = require('path');
var app = express();
var PORT = process.env.PORT || 3000;
var wwwRoot = 'base_index.html';

/*
 * Fake data
 */
var users = [
      {
        name: 'john',
        pass: 'john123',
        phone: '0912345678',
        creditCard: '1234-5678-1234-5678',
        authToken: ''
      },
      {
        name: 'hack',
        pass: 'hack123',
        phone: '',
        creditCard: '',
        authToken: ''
      }
    ]

app.use(bodyParser.json());
app.use(express.static('../../www-static'));
app.get('/', function(req, res, next) {
    res.sendFile(path.resolve(wwwRoot), function(err) {
      if (err) console.log(err);
    });
  }
);

app.post('/login', function(req, res, next) {
    console.log('raw body: ', req.body);
    console.log('sanitized name: ', sanitizer.sanitize(req.body.name));
    console.log('escaped name: ', sanitizer.escape(req.body.name));
    res.send({'abc':'abc'});
  }
);

app.listen(PORT, function() {
  console.log('Express listening on port ' + PORT);
});