'use strict';
// Register `phoneDetail` component, along with its associated controller and template
var PhoneDetailController = (function () {
    function PhoneDetailController($routeParams, Phone) {
        var _this = this;
        this.phone = Phone.get({ phoneId: $routeParams.phoneId }, function (phone) {
            _this.setImage(phone.images[0]);
        });
    }
    PhoneDetailController.prototype.setImage = function (image) {
        this.mainImageUrl = image;
    };
    return PhoneDetailController;
}());
PhoneDetailController.$inject = ['$routeParams', 'Phone'];
angular.
    module('phoneDetail').
    component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: PhoneDetailController
});
//# sourceMappingURL=phone-detail.component.js.map