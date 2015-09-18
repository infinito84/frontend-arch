//Libs Requires
require('angular');
require('jquery');

//App Requires
var modules = [
	require('ui-router'),
	require('angular-material'),
	require('./ui/state1/'),
	require('./ui/state2/'),
];

//Main Module
angular.module('app', modules)
	.config(require('./settings/main'));