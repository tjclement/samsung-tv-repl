/**
 * Created by tom on 25/12/15.
 */

var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({ port: 8080 });
var socket;

wss.on('connection', function connection(ws) {
    socket = ws;
    ws.on('message', function incoming(message) {
        onMessage(message);
    });
});

function onMessage(message) {
    process.stdout.write(message + '\r\n$ > ');
}

var prompt = require('cli-input');
var ps = prompt({infinite: true, prompt: '>', name: '$', delimiter: '>'});
ps.on('value', function(value, options, ps) {
    var payload = value.join(' ');
    if(socket){
        socket.send(payload.toString());
    }
});
ps.run();