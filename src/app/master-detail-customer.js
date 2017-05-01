"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Customer = (function () {
    function Customer(customerID, contactName, contactTitle, country, phone, address, state, city, zip) {
        this.customerID = customerID;
        this.contactName = contactName;
        this.contactTitle = contactTitle;
        this.country = country;
        this.phone = phone;
        this.address = address;
        this.state = state;
        this.city = city;
        this.zip = zip;
    }
    return Customer;
}());
exports.Customer = Customer;
exports.STATES = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
exports.CUSTOMERS = [new Customer('ALFKI', 'Maria Anders', 'Sales Representative', 'Germany', '030-0074321', 'Obere Str. 57', 'New Jersey', 'Parlin', '08859'),
    new Customer('ANATR', 'Ana Trujillo', 'Owner', 'Germany', '030-0074321', 'Obere Str. 57', 'New Jersey', 'Parlin', '08859'),
    new Customer('ANTON', 'Antonio Moreno', 'Owner', 'Germany', '030-0074321', 'Obere Str. 57', 'New Jersey', 'Parlin', '08859'),
    new Customer('AROUT', 'Around the Horn', 'Sales Representative', 'Germany', '030-0074321', 'Obere Str. 57', 'New Jersey', 'Parlin', '08859'),
    new Customer('BERGS', 'Christina Berglund', 'Order Administrator', 'Germany', '030-0074321', 'Obere Str. 57', 'New Jersey', 'Parlin', '08859'),
    new Customer('BLAUS', 'Hanna Moos', 'Sales Representative', 'Germany', '030-0074321', 'Obere Str. 57', 'New Jersey', 'Parlin', '08859'),
    new Customer('BLONP', 'Frédérique Citeaux', 'Marketing Manager', 'Germany', '030-0074321', 'Obere Str. 57', 'New Jersey', 'Parlin', '08859')
];
var MasterDetailCustomerComponent = (function () {
    function MasterDetailCustomerComponent() {
        this.title = 'Tour of Customers';
        this.customers = exports.CUSTOMERS;
        this.states = exports.STATES;
    }
    MasterDetailCustomerComponent.prototype.onSelect = function (cust) {
        this.selectedCustomer = cust;
    };
    return MasterDetailCustomerComponent;
}());
MasterDetailCustomerComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './master-detail-customer.html',
        styleUrls: ['./master-detail-customer.css']
    })
], MasterDetailCustomerComponent);
exports.MasterDetailCustomerComponent = MasterDetailCustomerComponent;
//# sourceMappingURL=master-detail-customer.js.map