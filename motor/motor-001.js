var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Assuming an Led is attached to pin 13, this will turn it on
  this.pinMode(3, five.Pin.ANALOG);
  this.analogWrite(3, 10);

  this.pinMode(4, five.Pin.OUTPUT);
  this.digitalWrite(4, 1);

  this.pinMode(7, five.Pin.OUTPUT);
  this.digitalWrite(7, 0);

  /*this.pinMode(6, five.Pin.ANALOG);
  this.analogWrite(6, 10);

  this.pinMode(8, five.Pin.OUTPUT);
  this.digitalWrite(8, 1);

  this.pinMode(12, five.Pin.OUTPUT);
  this.digitalWrite(12, 0);*/

});