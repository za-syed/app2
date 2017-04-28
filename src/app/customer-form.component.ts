import { Component } from '@angular/core';
import { Customer }  from './customer';
@Component({
  selector: 'cust-form',
  templateUrl: './cust-form.component.html',
   styleUrls: ['./forms.css']
})
export class CustomerFormComponent {
  lastIndex=20;
  customers = [new Customer('ALFKI1','Idiot Sin', 'Baigan','123-123-1234', '123 Purani Sadak', 'Jharkhand','Nai malum','500024'),
  new Customer('ALFKI2','Idiot Sin 1', 'Baigan 1','123-123-1234', '123 Purani Sadak 1', 'Jharkhand 1','Nai malum 1','500024'),
  new Customer('ALFKI','Idiot Sin 2', 'Baigan 2','123-123-1234', '123 Purani Sadak 2', 'Jharkhand 2','Nai malum2','500024')
  ];
//   powers = ['Really Smart', 'Super Flexible',
//             'Super Hot', 'Weather Changer'];
  model = new Customer('', '', '', '','');
  submitted = false;
  onSubmit() { this.submitted = true; }
  newCustomer() {
    this.model = new Customer('', '', '','');
  }
  AddCustomer(){
    this.customers.push(this.model);    
  }
  initializeForEdit(cust:Customer)
  {
    this.model =cust;
  }
  deleteCustomer(id:string)
  {
     this.customers =  this.customers.filter(c=>c.customerID!==id);
  }
}
