var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Assuming an Led is attached to pin 13, this will turn it on
  this.pinMode(3, five.Pin.ANALOG);
  this.analogWrite(3, 10);

  this.pinMode(2, five.Pin.OUTPUT);
  this.digitalWrite(2, 1);

  this.pinMode(1, five.Pin.OUTPUT);
  this.digitalWrite(1, 0);

});