"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var customer_1 = require("./customer");
var CustomerFormComponent = (function () {
    function CustomerFormComponent() {
        this.lastIndex = 20;
        this.customers = [new customer_1.Customer('ALFKI1', 'Idiot Sin', 'Baigan', '123-123-1234', '123 Purani Sadak', 'Jharkhand', 'Nai malum', '500024'),
            new customer_1.Customer('ALFKI2', 'Idiot Sin 1', 'Baigan 1', '123-123-1234', '123 Purani Sadak 1', 'Jharkhand 1', 'Nai malum 1', '500024'),
            new customer_1.Customer('ALFKI', 'Idiot Sin 2', 'Baigan 2', '123-123-1234', '123 Purani Sadak 2', 'Jharkhand 2', 'Nai malum2', '500024')
        ];
        //   powers = ['Really Smart', 'Super Flexible',
        //             'Super Hot', 'Weather Changer'];
        this.model = new customer_1.Customer('', '', '', '', '');
        this.submitted = false;
    }
    CustomerFormComponent.prototype.onSubmit = function () { this.submitted = true; };
    CustomerFormComponent.prototype.newCustomer = function () {
        this.model = new customer_1.Customer('', '', '', '');
    };
    CustomerFormComponent.prototype.AddCustomer = function () {
        this.customers.push(this.model);
    };
    CustomerFormComponent.prototype.initializeForEdit = function (cust) {
        this.model = cust;
    };
    CustomerFormComponent.prototype.deleteCustomer = function (id) {
        this.customers = this.customers.filter(function (c) { return c.customerID !== id; });
    };
    return CustomerFormComponent;
}());
CustomerFormComponent = __decorate([
    core_1.Component({
        selector: 'cust-form',
        templateUrl: './cust-form.component.html',
        styleUrls: ['./forms.css']
    })
], CustomerFormComponent);
exports.CustomerFormComponent = CustomerFormComponent;
//# sourceMappingURL=customer-form.component.js.map