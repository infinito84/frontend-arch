module.exports = function() {
	var $stateProvider = arguments[0];

	$stateProvider
		.state('state1', {
			url: "/state1",
			templateUrl: "templates/state1.html"
		})
		.state('state1.list', {
			url: "/list",
			templateUrl: "templates/state1.list.html",
			controller: 'State1Controller'
		});
};

module.exports.$inject = ['$stateProvider'];