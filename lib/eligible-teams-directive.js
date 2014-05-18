'use strict';

module.exports = EligibleTeamsDirective

EligibleTeamsDirective.$inject = [
]

function EligibleTeamsDirective() {
    return {
        restrict: 'EA'
        ,templateUrl: '/lib/eligible-teams.html'
        ,replace: true
        ,link: function(scope, elem, attrs) {
        }
    }
}
