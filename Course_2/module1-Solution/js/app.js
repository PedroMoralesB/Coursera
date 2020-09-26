(function () {
    'use strict';

    angular.module('LunchCheck', [])
           .controller('LunchCheckController', LunchCheckFunction);
    
    LunchCheckFunction.$inject = ['$scope'];
    function LunchCheckFunction ($scope) {
        $scope.list = "";
        $scope.outputMessage = "";
        $scope.checkIfTooMuch = function () {
            if ($scope.list == "") {
                $scope.list = "No items!!!";
                $scope.outputMessage = "Please enter data first";
            }
            else
                $scope.outputMessage = ListItemCounter($scope.list);
        };
        $scope.clearData = function () {
            $scope.list = "";
            $scope.outputMessage = "";
        }
    };
})();

function ListItemCounter (list) {
    var str = list.replace(/, |\ \,+/g, ","); // Remove "space comma" or "comma space"
    str = str.replace(/,+/g,","); // Remove double commas
    str = str.replace(/^,/, ""); // replace first comma
    str = str.slice(0,
        (str.lastIndexOf(",") == str.length - 1)
        ? -1 : str.length); // Replace Last comma
    return (str.split(',').length > 3 ? "Too Much!!" : "Enjoy!!");
}