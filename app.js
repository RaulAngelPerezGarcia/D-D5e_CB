var express 	= require('express');
var path 		= require('path');
var app 		= express();
var fs 			= require('fs');
var port 		= process.env.PORT || 8080;
var router 		= express.Router(); 

app.use(express.static(path.join(__dirname + '/node_modules')));

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, 'views/index.html'));
});

// REGISTER OUR router 
app.use('/', router);

// START THE SERVER
// =============================================================================

var server = app.listen(port, function(){
	console.log('Server listening on port 8080');
});
