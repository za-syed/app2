"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var customer_service_1 = require("./customer.service");
var CustomerMockComponent = (function () {
    function CustomerMockComponent(customerService) {
        this.customerService = customerService;
        this.title = 'Our Customers';
    }
    CustomerMockComponent.prototype.getCutomers = function () {
        var _this = this;
        this.customerService.getCustomers().then(function (customers) { return _this.customers = customers; });
    };
    CustomerMockComponent.prototype.ngOnInit = function () {
        this.getCutomers();
        // if(this.customers){
        // this.selectedCustomer =this.customers[0];    
        // }
    };
    CustomerMockComponent.prototype.onCustomerSelected = function (cust) {
        this.selectedCustomer = cust;
        //JSON.stringify(this.model);
    };
    return CustomerMockComponent;
}());
CustomerMockComponent = __decorate([
    core_1.Component({
        selector: 'customer-mock',
        templateUrl: './customer-mock.component.html',
        styleUrls: ['./forms.css'],
        providers: [customer_service_1.CustomerService]
    }),
    __metadata("design:paramtypes", [customer_service_1.CustomerService])
], CustomerMockComponent);
exports.CustomerMockComponent = CustomerMockComponent;
//# sourceMappingURL=customer-mock.component.js.map