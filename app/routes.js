// ROUTES.js -- RENDER PAGE
var express = require('express');
var app = express.Router();

// -----------------
//  R O U T I N G !
// -----------------

// # DASHBOARD #
// -------------

// # ASK #
// -------------
app.get('/', function(req, res) {
  res.render('bingbing/index');
});

module.exports = app;
