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
console.log(riskMeasures(100));




describe('Protractor Demo App', function() {

	beforeEach(function () {
		browser.get('http://localhost:5000/#/main');
		
	});
	it('should have a title', function() {
		var ele = by.css('.container h1');
		expect(browser.isElementPresent(ele)).toBe(true);
   		expect(element(by.css('h1')).getText()).toEqual("main template");
  	});

	it('it should have 3 links', function () {
	 element.all(by.css('a')).then(function (items) {
			expect(items.length).toBe(3);
	});
	 
	 var el = element.all(by.css('a'));
	 expect(el.get(0).getText()).toBe('risk factors');
	 expect(el.get(1).getText()).toBe('potential risks');
	 expect(el.get(2).getText()).toBe('risk assessment');
	 
	});


	it('should do a click on risl factors', function () {
		var el = element.all(by.css('a'));
		el.get(0).click().then(function () {
		});



	});


	it('should check all checkboxes', function () {
		 browser.get('http://localhost:5000/#/main/riskFactors');
		 var el = element.all(by.css('.btn'));
		 el.get(1).click().then(function () {		 	
		 el.get(0).click().then(function () {	
		 	element.all(by.css('a')).get(1).click().then(function () {	
		 	});
		 })
		 });
		 	
	});

	it('should check all risks', function () {
		browser.get('http://localhost:5000/#/main/potentialRisks');
		element.all(by.css('.btn')).get(1).click().then(function () {
			element.all(by.css('.btn')).get(0).click().then(function () {
				element.all(by.css('a')).get(2).click().then(function () {
					browser.pause(5000);
					element.all(by.css('.getRisks')).get(0).click().then(function () {
					var text = element.all(by.css('span.riskLength')).get(0).getText();
					expect(text).toEqual("42");
					
					var riskProbForm  = element.all(by.css('.probability')).get(0);
						riskConsForm =  element.all(by.css('.cons')).get(0);



					var testArray = riskMeasures(parseInt(10)), tempObj = {}, secondTestArray = [];
					
						

					while(testArray.length){
						
						tempObj = testArray.pop();
						secondTestArray.push(tempObj);
						
						riskProbForm.sendKeys(tempObj.prob);
						riskConsForm.sendKeys(tempObj.cons);
						
						element.all(by.css('.save')).get(0).click().then( function() {
							
						});
											

					}
					
					
					
					browser.pause(6000);


					});
				});
			});
		});
	});








});