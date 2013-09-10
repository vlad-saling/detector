$(window).resize(function() {
  // This will execute whenever the window is resized

  $(window).height(); // New height
  $(window).width(); // New width

  
});

$(document).ready(function(){

$("#width").html(window.screen.width);
$("#height").html(window.screen.height);
$("#wwidth").html(window.innerWidth);
$("#wheight").html(window.innerHeight);
$("#dpr").html(window.devicePixelRatio);
$("#dpi--value").html(window.devicePixelRatio*96);


$("#em--value").append("<span style=\"display:inline-block; padding:0; line-height:1; position:absolute; visibility:hidden; font-size:1em\">M</span>");

var emheight = $("#em--value span").height();
$("#em--value").html(emheight);


});


