var five = require("johnny-five"), 
    board = new five.Board();

board.on("ready", function() {

   var motor_R = new five.Motor({
    pins: {
      pwm: 2,
      dir: 6,
      brake: 7
    }
  });

  motor_R.on("forward", function(err, timestamp) {
    // demonstrate braking after 5 seconds
    board.wait(50, function() {
      motor_R.brake();
    });
  });

  motor_R.on("brake", function(err, timestamp) {
    // Release the brake after .1 seconds
    board.wait(10, function() {
      motor_R.stop();
    });
  });

  motor_R.forward(10);


});
