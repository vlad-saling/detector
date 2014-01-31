$(document).ready(function(){

    iOS = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );

    setTimeout(calculateStuff, 200);
});

$(window).resize(function() {
    setTimeout(calculateStuff, 200);
});


function calculateStuff() {


if (iOS) {

    //screen dimensions
    $("#width").html(window.screen.width*window.devicePixelRatio);
    $("#height").html(window.screen.height*window.devicePixelRatio);

    //screen physical dimensions
    $("#rwidth").html(window.screen.width);
    $("#rheight").html(window.screen.height);


}

else {

    //screen dimensions
$("#width").html(window.screen.width);
$("#height").html(window.screen.height);

    //screen physical dimensions
    $("#rwidth").html(window.screen.width/window.devicePixelRatio);
    $("#rheight").html(window.screen.height/window.devicePixelRatio);


}


//viewport dimensions
$("#wwidth").html(window.innerWidth);
$("#wheight").html(window.innerHeight);


//dpr/dpi calculation
$("#dpr").html(window.devicePixelRatio);
$("#dpi--value").html(window.devicePixelRatio*96);


//em value check
$("#em--value").append("<span style=\"display:inline-block; padding:0; line-height:1; position:absolute; visibility:hidden; font-size:1em\">M</span>");
var emheight = $("#em--value span").height();
$("#em--value").html(emheight);


//user agent
$('#user-agent').html(navigator.userAgent);


//accelerometer test
window.ondevicemotion = function(event) {  
    var accelerationX = event.accelerationIncludingGravity.x;  
    var accelerationY = event.accelerationIncludingGravity.y;  
    var accelerationZ = event.accelerationIncludingGravity.z;  


    //screen dimensions
    $("#X").html(accelerationX);
    $("#Y").html(accelerationY);
    $("#Z").html(accelerationZ);
}  


    
};


