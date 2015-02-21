//Use johnny-five to controll servo 
var five = require("johnny-five");

var WebSocketServer = require('ws').Server,
	wss = new WebSocketServer({port: 8124}),
	firmata = require('/usr/local/lib/node_modules/firmata'),
    board = new five.Board({port : "/dev/ttyACM0"});

    var ledPin = 13;
	var ServoPin_y = 9;

function arduinoReady(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Firmware: ' + board.firmware.name 
      + '-' + board.firmware.version.major 
      + '.' + board.firmware.version.minor);
 
    var ledOn = true;
    board.pinMode(ledPin, board.MODES.OUTPUT);
}

// this handles socket.io comm from html files
console.log("before board.on");

board.on("ready", function(){ 
	console.log("after board.on");

	//value for johnny-five
	var servo_x = new five.Servo(9); 
	var servo_y = new five.Servo(11);
	
	//Initialize
	servo_x.to(90);
	servo_y.to(90); 

	var led = new five.Led(13);
	var x_rot;
	var y_rot;

	console.log("before wss.on");
	wss.on('connection', function(ws) {
	//console.log("after wss.on");

		ws.on('message', function(message) {
			//console.log('received: %s', message);
			//console.log(message);
			var coords = message.split(' ');		
			x_rot = Math.floor(coords[0]);
			y_rot = Math.floor(coords[1]);
			servo_x.to(x_rot);
			servo_y.to(y_rot);
		});	
	}); 
	//Initialize
	servo_x.to(90);
	servo_y.to(90); 
});