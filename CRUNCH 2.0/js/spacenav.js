

var degrees = 0;




$("#left-button").click(function() {
  "use strict";
  $(".planet").hide();
  degrees += 72;

  $("#orbit").css({
    transform: "rotate(" + degrees + "deg)",
    "-ms-transform": "rotate(" + degrees + "deg)",
    "-moz-transform": "rotate(" + degrees + "deg)",
    "-webkit-transform": "rotate(" + degrees + "deg)",
    "-o-transform": "rotate(" + degrees + "deg)"
  });




  console.log(degrees);
});

$("#right-button").click(function() {
  "use strict";
  $(".planet").hide();
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

$("#left-button, #right-button").click(function() {
  "use strict";

  var orangePlanet = [10584,	10224,	9864,	9504,	9144,	8784,	8424,	8064,	7704,	7344,	6984,	6624,	6264,	5904,	5544,	5184,	4824,	4464,	4104,	3744,	3384,	3024,	2664,	2304,	1944,	1584,	1224,	864,	504,	144,	-216,	-576,	-936,	-1296,	-1656,	-2016,	-2376,	-2736,	-3096,	-3456,	-3816,	-4176,	-4536,	-4896,	-5256,	-5616,	-5976,	-6336,	-6696,	-7056,	-7416,	-7776,	-8136,	-8496,	-8856,	-9216,	-9576,	-9936,	-10296,	-10656,	-11016,	-11376,	-11736,	-12096,	-12456,	-12816,	-13176,];
  var bluePlanet = [-12168,	-11808,	-11448,	-11088,	-10728,	-10368,	-10008,	-9648,	-9288,	-8928,	-8568,	-8208,	-7848,	-7488,	-7128,	-6768,	-6408,	-6048,	-5688,	-5328,	-4968,	-4608,	-4248,	-3888,	-3528,	-3168,	-2808,	-2448,	-2088,	-1728,	-1368,	-1008,	-648,	-288,	72,	432,	792,	1152,	1512,	1872,	2232,	2592,	2952,	3312,	3672,	4032,	4392,	4752,	5112,	5472,	5832,	6192,	6552,	6912,	7272,	7632,	7992,	8352,	8712,	9072,	9432,	9792,	10152,	10512,	10872,	11232,	11592,	11952,	12312,	12672,];
  var greenPlanet = [-12240,	-11880,	-11520,	-11160,	-10800,	-10440,	-10080,	-9720,	-9360,	-9000,	-8640,	-8280,	-7920,	-7560,	-7200,	-6840,	-6480,	-6120,	-5760,	-5400,	-5040,	-4680,	-4320,	-3960,	-3600,	-3240,	-2880,	-2520,	-2160,	-1800,	-1440,	-1080,	-720,	-360,	0,	360,	720,	1080,	1440,	1800,	2160,	2520,	2880,	3240,	3600,	3960,	4320,	4680,	5040,	5400,	5760,	6120,	6480,	6840,	7200,	7560,	7920,	8280,	8640,	9000,	9360,	9720,	10080,	10440,	10800,	11160,	11520,	11880,];
  var greyPlanet = [12528,	12168,	11808,	11448,	11088,	10728,	10368,	10008,	9648,	9288,	8928,	8568,	8208,	7848,	7488,	7128,	6768,	6408,	6048,	5688,	5328,	4968,	4608,	4248,	3888,	3528,	3168,	2808,	2448,	2088,	1728,	1368,	1008,	648,	288,	-72,	-432,	-792,	-1152,	-1512,	-1872,	-2232,	-2592,	-2952,	-3312,	-3672,	-4032,	-4392,	-4752,	-5112,	-5472,	-5832,	-6192,	-6552,	-6912,	-7272,	-7632,	-7992,	-8352,	-8712,	-9072,	-9432,	-9792,	-10152,	-10512,	-10872,	-11232,];
  var pinkPlanet = [13176,	12816,	12456,	12096,	11736,	11376,	11016,	10656,	10296,	9936,	9576,	9216,	8856,	8496,	8136,	7776,	7416,	7056,	6696,	6336,	5976,	5616,	5256,	4896,	4536,	4176,	3816,	3456,	3096,	2736,	2376,	2016,	1656,	1296,	936,	576,	216,	-144,	-504,	-864,	-1224,	-1584,	-1944,	-2304,	-2664,	-3024,	-3384,	-3744,	-4104,	-4464,	-4824,	-5184,	-5544,	-5904,	-6264,	-6624,	-6984,	-7344,	-7704,	-8064,	-8424,	-8784,	-9144,	-9504,	-9864,	-10224,	-10584,	-10944,];

  

  if (degrees === -144 || pinkPlanet.indexOf(degrees) > -1) {
    $(".planet").hide();
    $("#crumb-text")
    .fadeIn(750);
  } else if (degrees === -72 || greyPlanet.indexOf(degrees) > -1) {
    $(".planet").hide();
    $("#comms-text")
    .fadeIn(750);
  } else if (degrees === 0 || greenPlanet.indexOf(degrees) > -1) {
    $(".planet").hide();
    $("#portfolio-text")
    .fadeIn(750);
  } else if (degrees === 72 || bluePlanet.indexOf(degrees) > -1) {
    $(".planet").hide();
    $("#team-text")
    .fadeIn(750);
  } else if (degrees === 144 || orangePlanet.indexOf(degrees) > -1) {
    $(".planet").hide();
    $("#stats-text")
    .fadeIn(750);
  } else {
  	degrees = 0;
    alert('Maximum Overdrive - returning to home planet');
    
  }
});

$('.ghst-btn').click(function() {
  var selectedPlanet = ($(this).closest('.planet').attr('id'));
  console.log(selectedPlanet);
  $('.overlay').css('z-index','99999999999999999');
  if (selectedPlanet == "team-text") {
    $(".overlay").css('background', '#0097cd');
  } else if (selectedPlanet == 'portfolio-text') {
    $(".overlay").css('background', '#bdd247');
  } else if (selectedPlanet == 'comms-text') {
    $(".overlay").css('background', '#d1d3d4');
  } else if (selectedPlanet == 'crumb-text') {
    $(".overlay").css('background', '#b44a9c');
  } else if (selectedPlanet == 'stats-text') {
    $(".overlay").css('background', '#f6b221');
  } else {
    degrees = 0;
    alert('Maximum Overdrive - returning to home planet');
    
  }
});






















