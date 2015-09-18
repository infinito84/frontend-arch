module.exports = function() {
	var $urlRouterProvider = arguments[0];

	$urlRouterProvider.otherwise("/state1");
}

module.exports.$inject = ['$urlRouterProvider'];