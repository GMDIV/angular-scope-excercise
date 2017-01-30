var app = angular.module('scope-practice', []);


//From the start, the ParentController div and ChildControler div within it will have the scope name of Parent.
//If you add change anything within the ParentController's input, it will display it on the parent and child div.
//However, if you change the input in the ChildController, it will of course not affect the ParentController. 
//But, later changing the input in the ParentController will no longer affect the ChildController.
//They have the same variable names, so once the child is given a different name, it no longer looks up to the parent. 


app.controller('ParentController', function ($scope) {
	$scope.name = "Parent";

	$scope.reset = function () { //Resets the name of the parent controller's scope.name
		$scope.name = "Parent";
	};//location - inside child controller area

});

app.controller('ChildController', function ($scope) {
});


