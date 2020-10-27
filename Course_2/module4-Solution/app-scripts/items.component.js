(function() {
    'use strict';

    const newLocal = 'app-templates/items.component.html';
    angular.module('MenuApp')
        .component('items', {
            templateUrl: newLocal,
            bindings: {
                items: '<'
            }
        });
})();