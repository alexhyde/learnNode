var express = require('express'); //requrie the express packages
var app = express(); // start express

var port = 5000; //port for express to listen on

app.get('/', function(req,res){
	res.send('Hello World!');
});

app.get('/routing', function(req,res){
	res.send('Hello Routing World!');
});

app.listen(port,function(err){
	console.log('The server is running on port: ' + port);
});