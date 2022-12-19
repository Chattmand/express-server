// import files and packages up here

var topSpots = require('./data.json');
var express = require('express');

// create your express server below
var app;
var app = express();
var PORT = 3000;

// add your routes and middleware below

app.get('/', (req, res)=>{
	res.set('Content-Type', 'text/html');
	res.status(200).send("<h1>'It's Workin'</h1>");
});

// finally export the express application
// app.listen(PORT, (error) =>{
// 	if(!error)
// 		console.log("Server is Successfully Running, and App is" +
// 					"listening on port" + PORT)
// 	else
// 		console.log("Error occurred, server can't start", error);
// 	}
//);
module.exports = app;
