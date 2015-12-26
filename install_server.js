/**
 * Created by tom on 25/12/15.
 */

var express = require('express');
var path = require('path');
var app = express();

app.use(function(req, res, next){
    console.log('File requested: ', path.basename(req.url));
    next();
});
app.use(express.static(__dirname + '/www'));

try {
    var server = app.listen(80, function () {
        var host = server.address().address;
        var port = server.address().port;

        console.log('JS REPL install server listening at http://%s:%s', host, port);
    });
} catch (error) {
    console.log('Error starting server', error);
}