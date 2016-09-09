(function() {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
	$scope.lunchMenu = '';
	$scope.message = '';		

	$scope.calculateLunchMenu = function() {
		var numOfDishes = countDishes($scope.lunchMenu);
		if (numOfDishes === undefined) {
			$scope.message = "Please enter data first";
		} else if (numOfDishes <= 3 && numOfDishes !== 0) {
			$scope.message = "Enjoy!";
		} else if (numOfDishes > 3) {
			$scope.message = "Too much!";
		}
	};

	$scope.emptyInput = function() {
		$scope.message = '';
	}

	$scope.differentMessages = function() {
		if ($scope.message === "Enjoy!" || $scope.message === "Too much!") {
			return 'alert alert-success';
		} else if ($scope.message === "Please enter data first") {
			return 'alert alert-danger';
		}
	}

	function countDishes(array) {
		if (array.length > 0) {
			var splittedArray = array.split(',');
			for (var i = splittedArray.length - 1; i >= 0; i--) {
			    if(splittedArray[i] === '') {
			       splittedArray.splice(i, 1);
			    }
			}
			return splittedArray.length;
		}
	}

}

})()