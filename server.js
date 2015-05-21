var express = require("express");
var app = express();
var mongoose = require("mongoose");
var morgan  =  require("morgan");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");



app.use(express.static(__dirname + '/client'));
/*
app.use('/bower_components',express.static(__dirname + '/bower_components'));
*/
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({"extended": "true"}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(methodOverride());



app.get("*",function(res,res) {
	res.sendfile("./client/index.html");
})





app.listen(process.env.PORT || 5000);
console.log("app listenning on port 8080");