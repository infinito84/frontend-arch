module.exports = function(){
	var $scope = arguments[0];

	$scope.items = ["1", "2", "3", "4"];
}

module.exports.$inject = ['$scope'];