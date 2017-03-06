var express = require('express'); //requrie the express packages
var app = express(); // start express

var port = 5000; //port for express to listen on

app.use(express.static('public')); // Command tells express to search for requested resources in the given directory. If the resource is not found, then express searches through the rest of the routes defined below. The express.static command tells express the folder is static. 
app.use(express.static('src/views')); // Adds another static resource for express to search. Static resources are searched in order. 
app.use(express.static('bower_components'));

app.get('/', function(req,res){ // This command tells express to return 'Hello World' when a browser naviagtes to our url's homepage with the given port in listen. req is the request that express received and res is the resonse we will send. 
	res.send('Hello World!');
});

app.get('/routing', function(req,res){// This command tells express to listen for the route /routing and return the given string. 
	res.send('Hello Routing World!');
});

app.listen(port,function(err){ //This command tells express to listen on the given port. It is also given a function call back when the listen happens successfully or with an error
	console.log('The server is running on port: ' + port);
});