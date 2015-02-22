var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Assuming an Led is attached to pin 13, this will turn it on
  this.pinMode(3, five.Pin.ANALOG);
  this.analogWrite(3, 20);

  this.pinMode(6, five.Pin.OUTPUT);
  this.digitalWrite(6, 1);

  this.pinMode(7, five.Pin.OUTPUT);
  this.digitalWrite(7, 0);

});