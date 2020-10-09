(function(){
    'use strict';

    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController (ShoppingListCheckOffService) {
        this.getItems = ShoppingListCheckOffService.getToBuyList();
        this.buyItems = function(itemIndex) {
            ShoppingListCheckOffService.processBuyItem(itemIndex);
        };
    }

    AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
    function AlreadyBoughtController (ShoppingListCheckOffService) {
        this.getItems = ShoppingListCheckOffService.getBoughtList();
    };

    function ShoppingListCheckOffService() {
        var service = this;
        var toBuy = [
            {"quantity": "1 ea.", "name": "Item 01"},
            {"quantity": "5 ea.", "name": "Item 02"},
            {"quantity": "1 ea.", "name": "Item 03"},
            {"quantity": "3 ea.", "name": "Item 04"},
            {"quantity": "2 ea.", "name": "Item 05"},
            {"quantity": "2 ea.", "name": "Item 06"},
            {"quantity": "3 ea.", "name": "Item 07"},
            {"quantity": "1 ea.", "name": "Item 08"},
            {"quantity": "1 ea.", "name": "Item 09"},
            {"quantity": "9 ea.", "name": "Item 10"}
        ];
        var bought = [
            // empty for now
        ];

        service.getToBuyList = function() {
            return toBuy;
        };

        service.processBuyItem = function(itemIndex) {
            var item = toBuy[itemIndex];

            bought.push(item);
            toBuy.splice(itemIndex, 1);
        };

        service.getBoughtList = function() {
            return bought;
        };
    }
})();