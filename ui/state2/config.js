module.exports = function() {
	var $stateProvider = arguments[0];

	$stateProvider
		.state('state2', {
			url: "/state2",
			templateUrl: "templates/state2.html"
		})
		.state('state2.list', {
			url: "/list",
			templateUrl: "templates/state2.list.html",
			controller: 'State2Controller'
		});
}

module.exports.$inject = ['$stateProvider'];