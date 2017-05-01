import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { CustomerService } from './customer.service';

export const STATES: string[] =['','Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

@Component({
  selector: 'customer-mock',
  templateUrl: './customer-mock.component.html',
  styleUrls: ['./forms.css'],
  providers: [CustomerService]
})
export class CustomerMockComponent implements OnInit {
  title = 'Our Customers';
  customers: Customer[];
   states =STATES;
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
  onAddNewCustomer(cust:Customer):void{
    //this.customers.push(cust);    
      this.customerService.addNewCustomer(cust).then(
        function(data){
         // alert(data);
        },
        function(err){
          //alert(err);
        });
      this.getCutomers();
  }
  onCreateNewCustomer():void{
    this.selectedCustomer=new Customer('','','','');
  }
    
}