import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { CUSTOMERS } from './mock-customers';

export class CustomerResponse { 
   constructor(
    public Success: Boolean,
    public Message: string    
  ) {  }

}


@Injectable()
export class CustomerService {
    Customers:Customer[];
   // customer: CustomerResponse;
    getCustomers(): Promise<Customer[]> {
        this.Customers =CUSTOMERS;
        return Promise.resolve(this.Customers);
    }
    addNewCustomer(cust: Customer) : Promise<CustomerResponse>{
        this.Customers.push(cust);
        let customer = new CustomerResponse(true, 'Customer was added successfully');
        return Promise.resolve(customer);
    }
}