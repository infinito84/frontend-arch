var angular = require('angular');
var dependencies = ['ui.router'];
var name = 'State2';

module.exports = name +'Module';

angular.module(module.exports, dependencies)
	.controller(name +'Controller', require('./controller'))
	.config(require('./config'));