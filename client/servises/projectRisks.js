angular.module('riskApp').factory('projectRisks',function(){
	var risks = [];
	return {
		getRisks : function(){
			return risks;
		},
		setRisks: function (array) {
			risks = array;
		},
		prioritize: function() {

			var min = risks[0].impact, max = risks[0].impact;

			for(var i = 0; i < risks.length; i++) {
				if (risks[i].impact > max ) max = risks[i].impact;
				if (risks[i].impact < min ) min = risks[i].impact;
			}



			for(var i = 0; i < risks.length; i++) {

			/*
			if (risks[i].impact >= min && risks[i].impact < ( min + (max-min)/3  )   ) risks[i].prioritet="low";
				
			if (risks[i].impact > ( min + 2*(max-min)/3  ) && risks[i].impact <= max ) risks[i].prioritet = "high";

			if ( (risks[i].impact >= (min+(max-min)/3)  ) && (risks[i].impact <= (min+2*(max-min)/3))   ) 
				
				risks[i].prioritet="medium";				
			*/
			if( risks[i].impact >= min && risks[i].impact < min + (max - min)/3  ) risks[i].prioritet = "low";
	else    if( risks[i].impact >= min + (max - min)/3 && risks[i].impact < 2*(max - min)/3 ) risks[i].prioritet = "medium";
	else    if( risks[i].impact >= 2*(max-min)/3) risks[i].prioritet ="high";	 
				
				
				
			}
			console.log(min);
			console.log(max);

			for(var i = 0; i < risks.length; i++) {
				for(var j = i; j < risks.length; j++) {

				}
			}
			console.log(risks);
			console.log("sort ===");
			risks.sort(function(a,b){ return b.impact - a.impact  });
			console.log(risks);
		}
	}
});