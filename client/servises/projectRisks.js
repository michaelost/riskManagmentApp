angular.module('riskApp').factory('projectRisks',function(){
	var risks = [];
	return {
		getRisks : function(){
			return risks;
		},
		setRisks: function (array) {
			risks = array;
		}
	}
});