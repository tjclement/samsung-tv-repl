/**
 * Created by tom on 25/12/15.
 */

var socket = new WebSocket('ws://<your ip here>:8080');
socket.onopen = function(){
    socket.send('Connection established');
};

socket.onmessage = function(event){
    var payload = event.data;
    var result = eval(payload);
    socket.send(result);
};

console.log = function(){
    socket.send('Log: ' + JSON.stringify(arguments));
};

alert = function(){
    socket.send('Alert: ' + JSON.stringify(arguments));
};

window.addEventListener('error', function (evt) {
    socket.send("Caught:  '" + evt.message + "' from " + evt.filename + ":" + evt.lineno);
    evt.preventDefault();
});
