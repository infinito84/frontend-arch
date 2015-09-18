module.exports = function(){
	var $scope = arguments[0];
	
	$scope.things = ["A", "B", "C", "D"];
}

module.exports.$inject = ['$scope'];