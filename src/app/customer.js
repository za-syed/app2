"use strict";
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
//# sourceMappingURL=customer.js.map