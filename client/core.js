angular.module("riskApp",['ngAnimate','ui.router'])
	.config(function($stateProvider,$urlRouterProvider) {
		
		$urlRouterProvider.otherwise('/main');
		$stateProvider

			.state('main',{
				
				url : '/main',
				templateUrl: 'views/main.html',
				controller: 'mainCtrl'
				
			})
			.state('main.riskFactors',{
				url: '/riskFactors',
				templateUrl: 'views/riskFactors.html',
				controller: 'mainCtrl'
			})
			.state('main.potentialRisks',{
				url: '/potentialRisks',
				templateUrl: 'views/potentialRisks.html',
				controller: 'mainCtrl'
			})
			.state('main.riskAssessment',{
				url: '/riskAssessment',
				templateUrl: 'views/riskAssessment.html',
				controller: 'mainCtrl'
			});

			
	})

	.controller("mainCtrl",['$scope','potentialRisks','riskFactors','$rootScope','projectRisks','counterMeasures','$http',
		function($scope,potentialRisks,riskFactors,$rootScope,projectRisks,counterMeasures,$http) {
		$scope.areRisks = false;
		$scope.factors = [];
		$scope.technicalRisks = [];
		$scope.costRisks = [];
		$scope.planRisks = [];
		$scope.managmentRiscks = [];
		$scope.potentialRisks = potentialRisks;
	  	$scope.riskFactors = riskFactors;
	  	$scope.projectRisks = projectRisks;
	  	$scope.counterMeasures = counterMeasures;
	  	$scope.prioritizationDisabled = true;
	  	$scope.areRisksAnalyzed = false;
	  	$scope.analyzedRiskIndex = 0;
	  	$scope.projectName="";

	  	$scope.projects = [];
	  	$scope.measuresCount = 0;
	  	$scope.selectedMeasure = "";
	  	$scope.selectMeasure = function (str) {
	  		$scope.selectedMeasure = str;


	  	}

	  	$scope.saveShow = false;
	  	$scope.openShow = false;

	  	$scope.isMenuActive = false;
	  	$scope.projectMenuActive = function () {
	  		$scope.getProjectList();
	  		$scope.isMenuActive = !$scope.isMenuActive;
	  	}


	  	$scope.getProjectList = function () {
	  		$http.get('/projects').success(function (data, status, headers, config) {
	  			$scope.projects = data;
	  		});
	  		console.log("projects ---" + $scope.projects);
	  	}

	  	$scope.setProjectToSave = function (name) {
	  		$scope.projectName = name
	  	}

	  	/*save project*/
	  	$scope.saveProject = function (){
	  		$http.post('/saveProject',{
	  			name: $scope.projectName,
	  			projectRisks: $scope.projectRisks,
	  			analyzedRisks: $scope.analyzedRisks
	  		
	  		});
	  		$scope.getProjectList();
	  	}

	  	$scope.loadProject = function (project) {
	  		$http({
	  			url: '/loadProject',
	  			method: 'GET',
	  			params: { name : project }
	  		}).success(function (data) {
	  			$scope.projectRisks = data[0].projectRisks;
	  			$scope.analyzedRisks = data[0].analyzedRisks;
	  			$scope.areRisks = true;
	  			if($scope.projectRisks.length == 0 && $scope.analyzedRisks.length!=0) {
	  				$scope.prioritizationDisabled = false;
	  			}
	  		});
	  	} 
	  	


	  	$scope.cancelMeasure = function (item) {
	  		item.measure = "";
	  		$scope.measuresCount--;
	  	}

	  	$scope.applyMeasure = function (i) {
	  		$scope.analyzedRisks[i].measure = $scope.selectedMeasure;
	  		$scope.analyzedRiskNext();
	  		$scope.measuresCount++;
	  		$scope.selectedMeasure = "";
	  	}

	  	$scope.analyzedRiskNext = function () {
	  		if ($scope.analyzedRiskIndex == $scope.analyzedRisks.length-1) $scope.analyzedRiskIndex = 0;
	  		else $scope.analyzedRiskIndex++;
	  	
	  	}


	  	$scope.analyzedRiskPrev = function () {
	  		
	  		if ($scope.analyzedRiskIndex == 0) $scope.analyzedRiskIndex = $scope.analyzedRisks.length-1;
	  		else $scope.analyzedRiskIndex--;
	  		
	  	}

	  	$scope.riskCounter = 0;

	  	$scope.next = function() {
	  		if($scope.riskCounter == $scope.projectRisks.length-1) $scope.riskCounter = 0;
	  			else $scope.riskCounter++;
	  	}
	  	$scope.prev = function () {
	  		if($scope.riskCounter == 0) $scope.riskCounter = $scope.projectRisks.length-1;
	  			else $scope.riskCounter--;
	  	}

	  	$scope.defineprojectRisks = function () {
	  		$scope.technicalRisks = [];
	  		$scope.costRisks = [];
	  		$scope.planRisks = [];
	  		$scope.managmentRiscks = [];
	  		angular.forEach($scope.potentialRisks, function (item) {
	  			if(item.checked)
	  			switch (item.category){
	  				case 'tr':
	  				$scope.technicalRisks.push(item);
	  				break;
	  				case 'cr':
	  				$scope.costRisks.push(item);
	  				break;
	  				case 'pr':
	  				$scope.planRisks.push(item);
	  				break;
	  				case 'mr':
	  				$scope.managmentRiscks.push(item);
	  				break;
	  			}

	  			window.location.href = "http://localhost:5000/#/main/riskAssessment";
	  		});
	  		
	  		$scope.projectRisks = $scope.technicalRisks.concat($scope.costRisks).concat($scope.planRisks).concat($scope.managmentRiscks);
	  		
	  		$rootScope.$broadcast('projectRisksDefined',$scope.projectRisks);
	  		console.log(projectRisks.getRisks());
	  		console.log(projectRisks.setRisks($scope.projectRisks));
	  		console.log("=========");
	  		console.log(projectRisks.getRisks());

	  		
	  	}


	  	$scope.prioritization = function () {
	  		projectRisks.setRisks($scope.analyzedRisks);
	  		

	  		console.log(projectRisks.getRisks());
	  		projectRisks.prioritize();
	  		$scope.areRisksAnalyzed = true;
	  	}


	  	$scope.analyzedRisks = [];

	  	$scope.toPrioritization = function (item) {

	  		if(item.probability != undefined && item.consequences != undefined ) {
	  			item.impact = (item.probability * item.consequences).toFixed(4);
	  			item.measure = "";
	  		}

	  		$scope.analyzedRisks.unshift(item);


	  		for(var i = 0; i < $scope.projectRisks.length; i++) {
	  			if($scope.projectRisks[i].description == item.description) $scope.projectRisks.splice(i,1);
	  		}

	  		console.log(item);

	  		/* check if all risk are ready for prioritization */
	  		if($scope.projectRisks.length==0 && $scope.analyzedRisks.length!=0) 
	  			$scope.prioritizationDisabled = false; 
	  				else $scope.prioritizationDisabled = true;

	  	} 
	  	$scope.backToProjectRisks = function (item) {
	  		$scope.projectRisks.unshift(item);
	  		for(var i = 0; i < $scope.analyzedRisks.length; i++) {
	  			if($scope.analyzedRisks[i].description == item.description) $scope.analyzedRisks.splice(i,1);
	  		}
	  		$scope.prioritizationDisabled = true;
	  	}


	  	$scope.getProjectRisks = function () {
	  		$scope.areRisks = true;
	  		$scope.projectRisks = projectRisks.getRisks();
	  	}
	  	

	  	$scope.applyChanges = function () {
	  		console.log($scope.projectRisks.length);


	  	}

		$scope.checkAllRisks = function () {
			angular.forEach($scope.potentialRisks, function(item) {
				item.checked = true;
			});
		}

		$scope.uncheckAllRisks = function () {
			angular.forEach($scope.potentialRisks, function(item) {
				item.checked = false;
			});
		}

		$scope.checkAllFactors = function () {
			angular.forEach($scope.riskFactors, function(item) {
				item.checked = true;
			});
		}
		$scope.uncheckAllFactors = function () {
			angular.forEach($scope.riskFactors,function(item) {
				item.checked = false;
			});
		}

		$scope.applyFactors = function (){
			$scope.factors = [];
			var k = 0;

			for(var i = 0; i < $scope.riskFactors.length; i++) {
				if ($scope.riskFactors[i].checked == true) k++;
					console.log(i);
				switch(i){
					case 6:
					if(k == 7) $scope.factors.push("technical");
					console.log("k = "+k);
					k = 0;
					break;
					case 9:
					if (k == 3) $scope.factors.push("cost ");
					console.log("k = "+k);
					k = 0;
					break;
					case 11: 
					if (k == 2) $scope.factors.push("plan");
					console.log("k = "+k);
					k = 0;
					break;
					case 16:
					console.log("k = "+k);
					if(k == 5) $scope.factors.push("process and project managment process"); 
					k = 0;
					break;
				}
			}
		}
	}])
	
	.controller('riskAssessmentCtrl',['$rootScope','$scope',function($rootScope,$scope){
		$scope.message = "i am a message";
		

		$scope.show = function () {
			console.log("data = "+$scope.data);
			console.log($scope.message);
		}
		
	}]);
	
