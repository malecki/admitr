'use strict';

module.exports = PatientDetailDirective

PatientDetailDirective.$inject = [
]

function PatientDetailDirective() {
    return {
        restrict: 'EA'
        ,templateUrl: '/lib/patient-detail.html'
        ,replace: true
        ,link: function(scope, elem, attrs) {
        }
    }
}
