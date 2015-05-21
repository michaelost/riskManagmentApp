function riskMeasures(n) {
	var arr = [],prob,cons;
	for(var i = 0; i < n; i++) {
		prob =  "0." + Math.floor((Math.random() * 9) + 1);
		prob += Math.floor((Math.random() * 9) + 1);
		cons = "0." + Math.floor((Math.random() * 9) + 1);
		cons += Math.floor((Math.random() * 9) + 1);
		arr.push({
			prob : prob,
			cons : cons
		});
	}
	return arr;
}
console.log(riskMeasures(10));

