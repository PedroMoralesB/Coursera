(function() {
    'use strict';

    const newLocal = 'app-templates/categories.component.html';
    angular.module('MenuApp')
        .component('categories', {
           templateUrl: newLocal,
            bindings: {
                categories: '<'
            }
        });
})();