import { Component } from '@angular/core';
export class Customer {
   constructor(
    public customerID: string,
    public contactName: string,
    public contactTitle: string,
    public country: string,
    public phone?: string,
    public address?: string,
    public state?: string,
    public city?: string,
    public zip?: string    
  ) {  }
}
export const STATES: string[] =['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
export const CUSTOMERS: Customer[] = [new Customer('ALFKI', 'Maria Anders', 'Sales Representative', 'Germany','030-0074321', 'Obere Str. 57','New Jersey','Parlin','08859'),
new Customer('ANATR', 'Ana Trujillo', 'Owner', 'Germany','030-0074321', 'Obere Str. 57','New Jersey','Parlin','08859'),
new Customer('ANTON', 'Antonio Moreno', 'Owner', 'Germany','030-0074321', 'Obere Str. 57','New Jersey','Parlin','08859'),
new Customer('AROUT', 'Around the Horn', 'Sales Representative', 'Germany','030-0074321', 'Obere Str. 57','New Jersey','Parlin','08859'),
new Customer('BERGS', 'Christina Berglund', 'Order Administrator', 'Germany','030-0074321', 'Obere Str. 57','New Jersey','Parlin','08859'),
new Customer('BLAUS', 'Hanna Moos', 'Sales Representative', 'Germany','030-0074321', 'Obere Str. 57','New Jersey','Parlin','08859'),
new Customer('BLONP', 'Frédérique Citeaux', 'Marketing Manager', 'Germany','030-0074321', 'Obere Str. 57','New Jersey','Parlin','08859')
];
@Component({
  selector: 'my-app',
  templateUrl:'./master-detail-customer.html'    
  ,
  styleUrls: ['./master-detail-customer.css']
})
export class MasterDetailCustomerComponent {
  title = 'Tour of Customers';
  customers = CUSTOMERS;
  states =STATES;
  selectedCustomer: Customer;
  onSelect(cust: Customer): void {
    this.selectedCustomer = cust;
  }
}
