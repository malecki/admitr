'use strict';

module.exports = NightResidentsDirective

NightResidentsDirective.$inject = [
]

function NightResidentsDirective() {
    return {
        restrict: 'EA'
        ,templateUrl: '/lib/night-residents.html'
        ,replace: true
        ,link: function(scope, elem, attrs) {
        }
    }
}
