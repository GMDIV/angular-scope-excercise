var app = angular.module('scope-practice', []);

app.controller('ParentController', function ($scope) {
	$scope.name = "Parent";

	$scope.reset = function () { //Resets the name of the parent controller's scope.name
		$scope.name = "Parent";
	};//location - inside child controller area

});

app.controller('ChildController', function ($scope) {
});


