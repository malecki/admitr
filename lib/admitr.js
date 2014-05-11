'use strict';
/*
 * admitr
 * https://github.io/malecki/admitr
 *
 * Copyright (c) 2014 malecki
 * Licensed under the MIT license.
 */

var _ = require('lodash')
	,machina = require('machina')
//	,angular = require('angular')
	;
var app = angular.module('admitrApp',[
	'mgcrea.ngStrap'
])
app.factory('machina', function(){
	return machina
})
app.factory('lodash', function() {
        return _
})
app.factory('test', require('./team.js'))
app.directive('teamList', require('./team-list-directive.js'))