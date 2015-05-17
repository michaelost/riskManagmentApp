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

	.controller("mainCtrl",['$scope','potentialRisks','riskFactors','$rootScope','projectRisks',
		function($scope,potentialRisks,riskFactors,$rootScope,projectRisks) {
		
		$scope.factors = [];
		$scope.technicalRisks = [];
		$scope.costRisks = [];
		$scope.planRisks = [];
		$scope.managmentRiscks = [];
		$scope.potentialRisks = potentialRisks;
	  	$scope.riskFactors = riskFactors;
	  	$scope.projectRisks = projectRisks;

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
	  		});
	  		
	  		$scope.projectRisks = $scope.technicalRisks.concat($scope.costRisks).concat($scope.planRisks).concat($scope.managmentRiscks);
	  		
	  		$rootScope.$broadcast('projectRisksDefined',$scope.projectRisks);
	  		console.log(projectRisks.getRisks());
	  		console.log(projectRisks.setRisks($scope.projectRisks));
	  		console.log("=========");
	  		console.log(projectRisks.getRisks());

	  		
	  	}

	  	$scope.getProjectRisks = function () {
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
	
