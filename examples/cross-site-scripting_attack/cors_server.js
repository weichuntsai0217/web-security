"use strict";
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var PORT = process.env.PORT || 5000;
var cors = function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header('Access-Control-Allow-Methods', 'POST, PUT');
      /*
         DELETE is not allowed because 
         we don't add DELETE in Access-Control-Allow-Methods.
       */ 
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
    };

app.use(bodyParser.json());
app.use(cors);

app.post('/data', function(req, res, next) {
    res.send({'post': 'POST is allowed.'})
  }
);


app.get('/data', function(req, res, next) {
    res.send({'get': 'GET is allowed.'})
  }
);

app.put('/data', function(req, res, next) {
    res.send({'put': 'PUT is allowed.'})
  }
);

app.delete('/data', function(req, res, next) {
    res.send({'delete': 'DELETE is allowed.'})
  }
);

app.listen(PORT, function() {
  console.log('Express listening on port ' + PORT);
});