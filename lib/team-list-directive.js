'use strict';

module.exports = TeamListDirective

TeamListDirective.$inject = [
]

function TeamListDirective() {
    return {
        restrict: 'EA'
        ,templateUrl: '/lib/team-list.html'
        ,replace: true
        ,link: function(scope, elem, attrs) {
        }
    }
}
