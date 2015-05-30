var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var RiskSchema = new Schema({
	description: String,
	checked: Boolean,
	probability: Number,
	consequences: Number,
	impact: Number,
	category: String,
	measure: String,
});

var ProjectSchema = new Schema({
	name : String,
	projectRisks : [],
	analyzedRisks : [],
	created : { type: Date, default: Date.now }
});


var risk = mongoose.model('Risk', RiskSchema);
var project = mongoose.model('Project', ProjectSchema);
