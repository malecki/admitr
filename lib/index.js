'use strict';
/*
 * admitr
 * https://github.io/malecki/admitr
 *
 * Copyright (c) 2014 malecki
 * Licensed under the MIT license.
 */

module.exports = function admitr(name){
    var _ = require('lodash')
        ,machina = require('machina')
        ,ngstrap = require('../components/angular-strap/dist/angular-strap.min.js')
        ,ngtpl = require('../components/angular-strap/dist/angular-strap.tpl.min.js')
        ,nganimate = require('../components/angular-animate/angular-animate.min.js')
        ;

    var app = angular.module(name || 'admitrApp',[
        'mgcrea.ngStrap', 'ngAnimate'
    ])
    app.factory('lodash', function() {
            return _
    })
    app.factory('machina', function(){
        return machina(_)
    })
    //app.factory('Admitter', require('./admitter.js'))
    app.factory('Team', require('./team.js'))
    app.factory('TeamGroup', require('./team-group.js'))
    //app.factory('Patient', require('./patient.js'))
    app.factory('Configurator', require('./configure.js'))
    app.directive('nightResidents', require('./night-residents-directive.js'))
    app.directive('teamList', require('./team-list-directive.js'))
    app.directive('patientDetail', require('./patient-detail-directive.js'))
    app.directive('eligibleTeams', require('./eligible-teams-directive.js'))
    app.directive('history', require('./history-directive.js'))
    app.controller('admitr', ['$scope', 'TeamGroup', 'Configurator',
    function($scope, TeamGroup, Configurator){
        var config = {name: 'Medicine', teams: [
            {name: 'A', cap: 10}
            ,{name: 'B', cap: 10}
        ]}
        $scope.Admitter = TeamGroup.create(config)
    }])
    return app
}
