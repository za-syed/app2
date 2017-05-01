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
var customer_1 = require("./customer");
var customer_service_1 = require("./customer.service");
exports.STATES = ['', 'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
var CustomerMockComponent = (function () {
    function CustomerMockComponent(customerService) {
        this.customerService = customerService;
        this.title = 'Our Customers';
        this.states = exports.STATES;
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
    CustomerMockComponent.prototype.onAddNewCustomer = function (cust) {
        //this.customers.push(cust);    
        this.customerService.addNewCustomer(cust).then(function (data) {
            // alert(data);
        }, function (err) {
            //alert(err);
        });
        this.getCutomers();
    };
    CustomerMockComponent.prototype.onCreateNewCustomer = function () {
        this.selectedCustomer = new customer_1.Customer('', '', '', '');
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