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


wss.on('connection', function(ws) {
	board.on("ready", function(){ 

    //value for johnny-five
    var servo = new five.Servo(9); 
    var led = new five.Led(13);
    var y_rot;
    
		ws.on('message', function(message) {
			//console.log('received: %s', message);
			y_rot = Number(message);
		});
		ws.send('hello world');
	});

	servo.to(y_rot);
	console.log(y_rot);
    
});