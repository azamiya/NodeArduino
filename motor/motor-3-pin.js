var five = require("johnny-five"),
  board = new five.Board();

board.on("ready", function() {
  var motor_R;
  var motor_L;

  /*
    Seeed Studio Motor Shield V1.0, V2.0
      Motor A
        pwm: 9
        dir: 8
        cdir: 11

      Motor B
        pwm: 10
        dir: 12
        cdir: 13

    Freetronics Motor Shield
      Motor A
        pwm: 6
        dir: 5
        cdir: 7

      Motor B
        pwm: 4
        dir: 3
        cdir: 2

   */


  motor_R = new five.Motor({
    pins: {
      pwm: 3,
      dir: 2,
      cdir: 1
    }
  });

  motor_L = new five.Motor({
    pins: {
      pwm: 7,
      dir: 6,
      cdir: 5
    }
  });


  board.repl.inject({
    motor_R: motor_R,
  });

  motor_R.on("start", function(err, timestamp) {
    console.log("start_R", timestamp);
  });

  motor_R.on("brake", function(err, timestamp) {
    console.log("automated brake on timer_R", timestamp);
  });

  motor_R.on("forward", function(err, timestamp) {
    console.log("forward_R", timestamp);

    // demonstrate switching to reverse after 5 seconds
    board.wait(1000, function() {
      motor_R.reverse(10);
    });
  });

  motor_R.on("reverse", function(err, timestamp) {
    console.log("reverse_R", timestamp);

    // demonstrate braking after 5 seconds
    board.wait(1000, function() {

      // Brake for 500ms and call stop()
      motor_R.brake(500);
    });
  });

  board.repl.inject({
    motor_L: motor_L,
  });

  motor_L.on("start", function(err, timestamp) {
    console.log("start_L", timestamp);
  });

  motor_L.on("brake", function(err, timestamp) {
    console.log("automated brake on timer_L", timestamp);
  });

  motor_L.on("forward", function(err, timestamp) {
    console.log("forward_L", timestamp);

    // demonstrate switching to reverse after 5 seconds
    board.wait(1000, function() {
      motor_L.reverse(10);
    });
  });

  motor_L.on("reverse", function(err, timestamp) {
    console.log("reverse_L", timestamp);

    // demonstrate braking after 5 seconds
    board.wait(1000, function() {

      // Brake for 500ms and call stop()
      motor_L.brake(10);
    });
  });

  // set the motor going forward full speed
  motor_R.forward(1);

  // set the motor going forward full speed
  motor_L.forward(1);
});
