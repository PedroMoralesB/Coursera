(function () {
    'use strict';

    angular.module('appName', [])
           .controller('appController', appControllerFunction);
        
    appControllerFunction.$inject = ['$scope'];
    function appControllerFunction ($scope) {
        $scope.name = "Variable Data";
        $scope.funcData = function () {
        return "Function Return";
        };
    };    
})();
