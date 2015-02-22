var five = require("johnny-five"), 
    board = new five.Board();

board.on("ready", function() {

  var motor = new five.Motor({
    pins: {
      pwm: 3,
      dir: 2,
      brake: 1
    }
  });

  motor.on("forward", function(err, timestamp) {
    // demonstrate braking after 5 seconds
    board.wait(50, function() {
      motor.brake();
    });
  });

  motor.on("brake", function(err, timestamp) {
    // Release the brake after .1 seconds
    board.wait(100, function() {
      motor.stop();
    });
  });

  // Start the motor at maximum speed
  //motor.forward(255);
  motor.forward(100);

});