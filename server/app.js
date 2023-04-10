var topSpots = require('./data.json');
var express = require('express');


var app;
var app = express();
var PORT = 3000;



app.get('/', (req, res)=>{
	res.set('Content-Type', 'text/html');
	res.status(200).send("<h1>'It's Workin'</h1>");
});


app.get('/data', function(req, res){
    res.send(topSpots)
})

module.exports = app;
