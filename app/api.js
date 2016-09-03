// API.js -- POST AND GET
var express = require('express');
var app = express.Router();

// # GENERAL API #
// --------------------

app.get('/sendbing/:color',function(req,res){
  req.app.io.emit('bingbing',{ class : req.params.color });
  res.send({status:'completed'})
});

module.exports = app;
