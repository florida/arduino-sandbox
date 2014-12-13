var five = require("johnny-five"),
    // or "./lib/johnny-five" when running from the source
    board = new five.Board();

board.on("ready", function() {

  // Create an Led on pin 13 and strobe it on/off
  // Optionally set the speed; defaults to 100ms

  var led = new five.Led.RGB([ 9, 10, 11 ]);
  //(new five.Led(13)).strobe();
  //for(var i = 0; i >= 50; i++) {

    led.color("#ff00ff");
    led.on();
  //}


});

