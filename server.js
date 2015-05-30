var express = require("express");
var app = express();
var mongoose = require("mongoose");
var morgan  =  require("morgan");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var fs = require('fs');
var projects = require('./models/projects.js');

mongoose.connect('mongodb://michaelost:123qweasdzxcv@ds029541.mongolab.com:29541/mydatabase');
mongoose.connection.on('connected', function () {

	console.log("connected succesfully...");
/*
	var Risk = mongoose.model('Risk'),
		risk = new Risk({
			description: "sad",
			checked: true,
			probability: 0.22,
			consequences: 0.22,
			impact: 0.22,
			category: ""
		});
		risk.save();

*/

});





app.use(express.static(__dirname + '/client'));
/*
app.use('/bower_components',express.static(__dirname + '/bower_components'));
*/
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({"extended": "true"}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(methodOverride());


var Project = mongoose.model('Project');
	
app.post("/saveProject",function(req,res) {
	
	project = new Project({
		name: req.body.name,
		projectRisks: req.body.projectRisks,
		analyzedRisks : req.body.analyzedRisks,
	})
	project.save();
});

app.get("/projects", function (req,res) {
	var projectNames = [];
	Project.find({},function (err,data) {
		for(var i = 0; i < data.length; i++) {
			projectNames.push(data[i].name);
		}
	
	res.send(projectNames);
	});
	
});


app.get('/loadProject', function (req,res) {
	console.log(req.param);
	Project.find({name: req.param('name') }, function(err,data){
		console.log("data");
		console.log(data);
		if(err) {

		}else 
			res.send(data);
	})
});



app.get("/",function(res,res) {
	res.sendfile("./client/index.html");
})





app.listen(process.env.PORT || 5000);
console.log("app listenning on port 8080");