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
        ;
    var app = angular.module(name || 'admitrApp',[
        //'mgcrea.ngStrap'
    ])
    app.factory('lodash', function() {
            return _
    })
    app.factory('machina', function(){
        return machina(_)
    })
    //app.factory('Admitter', require('./admitter.js'))
    app.factory('Team', require('./team.js'))
    //app.factory('Patient', require('./patient.js'))
    //app.factory('Config', require('./configure.js'))
    //app.controller('admitr', require('./admitr-ctrl.js'))
    //app.directive('teamList', require('./team-list-directive.js'))
    //app.directive('teamsEditor', require('./teams-editor-directive.js'))
    //app.directive('nightResidents', require('./night-residents-directive.js'))
    //app.directive('patientDetail', require('./patient-detail-directive.js'))
    //app.directive('eligibleTeams', require('./eligible-teams-directive.js'))
    return app
}
