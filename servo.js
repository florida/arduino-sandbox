var five = require("johnny-five"),
    RandomColor = require('randomcolor'),
    // or "./lib/johnny-five" when running from the source
    board = new five.Board();

board.on("ready", function() {
  var servo = new five.Servo({
    pin: 12,
    type: "continuous"
  });
  servo.sweep();
});


