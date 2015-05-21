describe('Protractor Demo App', function() {

	beforeEach(function () {
		browser.get('http://localhost:5000/#/main');
		
		console.log("lololo");
	});


	it('should have a title', function() {
		
		var ele = by.css('.container h1');
		expect(browser.isElementPresent(ele)).toBe(true);
   		expect(element(by.css('h1')).getText()).toEqual("main template");
  	});

	it('it should have 3 links', function () {
	var el = element.all(by.css('a')).then(function (items) {
			expect(items.length).toBe(3);
			expect(el.first.getText()).toBe('risk factors');
		})
	});



});