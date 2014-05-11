'use strict';

module.exports = TeamListDirective

TeamListDirective.$inject = [
]

function TeamListDirective() {
    return {
        restrict: 'E'
        //,template: '<div class="team-list">I am the team list</div>'
        ,templateUrl: '/lib/team-list.html'
        ,link: function(scope, elem, attrs) {
        }
    }
}
