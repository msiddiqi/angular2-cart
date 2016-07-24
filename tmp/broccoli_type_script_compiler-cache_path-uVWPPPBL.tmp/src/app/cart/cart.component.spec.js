/* tslint:disable:no-unused-variable */
"use strict";
var cart_service_1 = require('./../cart.service');
var testing_1 = require('@angular/core/testing');
var cart_component_1 = require('./cart.component');
testing_1.describe('Component: Cart', function () {
    testing_1.it('should create an instance', function () {
        var cartService = new cart_service_1.CartService();
        var component = new cart_component_1.CartComponent(cartService);
        testing_1.expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=cart.component.spec.js.map