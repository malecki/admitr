'use strict';

module.exports = TeamListDirective

TeamListDirective.$inject = [
]

function TeamListDirective() {
    return {
        restrict: 'E'
        ,templateUrl: '/lib/team-list.html'
        ,link: function(scope, elem, attrs) {
        }
    }
}
