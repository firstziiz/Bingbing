'use strict'

$(document).ready(function() {

  var socket = io.connect();

  socket.on('bingbing', function(data) {
    console.log(data.class);
    $('body#freshman').removeClass()
    $('body#freshman').addClass(data.class);
  });

  $('.click-color button').click(function(){
      var color = $(this).data(color);

      $.ajax({
      url: "/sendbing/"+color.color,
    });

  })
});
