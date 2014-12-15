var five = require("johnny-five"),
    RandomColor = require('randomcolor'),
    // or "./lib/johnny-five" when running from the source
    board = new five.Board();

board.on("ready", function() {

  var led = new five.Led.RGB([ 9, 10, 11 ]);

  setInterval(function() {
    led.off();
    console.log("Blinking and things");
    led.color(RandomColor.randomColor());
    led.on();
  }, 1000);
});
