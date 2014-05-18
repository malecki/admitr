'use strict';

module.exports = HistoryDirective

HistoryDirective.$inject = [
]

function HistoryDirective() {
    return {
        restrict: 'EA'
        ,templateUrl: '/lib/history.html'
        ,replace: true
        ,link: function(scope, elem, attrs) {
        }
    }
}
