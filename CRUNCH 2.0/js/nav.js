/*jslint browser: true*/
/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global $*/



var degrees = '';


$("#right-button").click(function () {
    "use strict";
    $('.planet').hide();
    degrees += 72;

  //$('.img').addClass('rotated'); // for one time rotation
  
    $('#orbit').hide();
    $("#orbit").css({
        transform: "rotate(" + degrees + "deg)",
        "-ms-transform": "rotate(" + degrees + "deg)",
        "-moz-transform": "rotate(" + degrees + "deg)",
        "-webkit-transform": "rotate(" + degrees + "deg)",
        "-o-transform": "rotate(" + degrees + "deg)"
    });

    console.log(degrees);
});

$("#left-button").click(function () {
    "use strict";
    $('.planet').hide();
    degrees -= 72;

  //$('.img').addClass('rotated'); // for one time rotation
  

    $("#orbit").css({
        transform: "rotate(" + degrees + "deg)",
        "-ms-transform": "rotate(" + degrees + "deg)",
        "-moz-transform": "rotate(" + degrees + "deg)",
        "-webkit-transform": "rotate(" + degrees + "deg)",
        "-o-transform": "rotate(" + degrees + "deg)"
    });

    console.log(degrees);
});

$("#left-button, #right-button").click(function () {
    
    "use strict";
 
    if (degrees === 0) {
        $('.planet').hide();
        $('#team-text').delay(1100).fadeIn(1500);
    
    } else if (degrees === 72) {
        $('.planet').hide();
        $('#portfolio-text').delay(1100).fadeIn(1500);
    
    } else if (degrees === 144) {
        $('.planet').hide();
        $('#comms-text').delay(1100).fadeIn(1500);
    
    } else if (degrees === 216) {
        $('.planet').hide();
        $('#crumb-text').delay(1100).fadeIn(1500);
    
    } else {
      
        $('.planet').css('color', 'red');
      
    }
  
});