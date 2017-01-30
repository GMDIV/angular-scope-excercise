var app = angular.module('scope-practice', []);


//From the start, the ParentController div and ChildControler div within it will have the scope name of Parent.
//If you add change anything within the ParentController's input, it will display it on the parent and child div.
//However, if you change the input in the ChildController, it will of course not affect the ParentController. 
//But, later changing the input in the ParentController will no longer affect the ChildController.
//They have the same variable names, so once the child is given a different name, it no longer looks up to the parent. 
//Think of it like Object.create().


app.controller('ParentController', function ($scope, $rootScope) {
	// $scope.name = "ParentController Default";

	// //Resets the name of the parent controller's scope.name
	// $scope.reset = function () { 
	// 	$scope.name = "ParentController has been reset";
	// };
	// //location - inside child controller area

});

app.controller('ChildController', function ($scope, $rootScope) {

	//This function make makes the button in ChildController set to rootScope as opposed to ParentController
	//When this is clicked, it changes every input entry globally. Though still, if the ChildController or 
	//ParentController's entry was changed, then they will have variables of the same name as the rootScope and not change.
	$scope.reset = function () { 
		$rootScope.name = "Reset by ChildController";
	};
});


