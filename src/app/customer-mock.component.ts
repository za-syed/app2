import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { CustomerService } from './customer.service';
@Component({
  selector: 'customer-mock',
  templateUrl: './customer-mock.component.html',
  styleUrls: ['./forms.css'],
  providers: [CustomerService]
})
export class CustomerMockComponent implements OnInit {
  title = 'Our Customers';
  customers: Customer[];
 //  model = new Customer('', '', '', '','');    
  selectedCustomer: Customer;  
  constructor(private customerService: CustomerService) { }
  getCutomers(): void {
    this.customerService.getCustomers().then(customers => this.customers = customers);
  }  
    ngOnInit(): void {
    this.getCutomers();
    // if(this.customers){
    // this.selectedCustomer =this.customers[0];    
    // }
  }
  onCustomerSelected(cust:Customer): void {
   this.selectedCustomer =cust;
   //JSON.stringify(this.model);
  }
    
}