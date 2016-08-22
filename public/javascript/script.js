'use strict'

$(document).ready(function() {

  var socket = io.connect();
  
  socket.on('bingbing', function(data) {
    console.log(data);
    $('body').css("background-color", data.color);
  });

});