var five = require("johnny-five"), 
    board = new five.Board();

board.on("ready", function() {

  var motor_L = new five.Motor({
    pins: {
      pwm: 3,
      dir: 2,
      brake: 1
    }
  });

   var motor_R = new five.Motor({
    pins: {
      pwm: 10,
      dir: 9,
      brake: 8
    }
  });

  motor_L.on("forward", function(err, timestamp) {
    // demonstrate braking after 5 seconds
    board.wait(50, function() {
      motor_L.brake();
    });
  });

  motor_L.on("brake", function(err, timestamp) {
    // Release the brake after .1 seconds
    board.wait(10, function() {
      motor_L.stop();
    });
  });

  // Start the motor at maximum speed
  //motor.forward(255);
  motor_L.forward(10);

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