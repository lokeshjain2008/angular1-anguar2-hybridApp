'use strict';
angular.element(function () {
    angular.bootstrap(document.body, ['phonecatApp'], { strictDi: true });
});
// Define the `phonecatApp` module
angular.module('phonecatApp', [
    'ngAnimate',
    'ngRoute',
    'core',
    'phoneDetail',
    'phoneList'
]);
//# sourceMappingURL=app.module.js.map