import { CustomerMockComponent } from './customer-mock.component';
import {Customer} from './customer';
import { CustomerService } from './customer.service';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('CustomerMockComponent', function () {
  let de: DebugElement;  
  let comp: CustomerMockComponent;
  let fixture: ComponentFixture<CustomerMockComponent>;
  let cust: Customer;
  let custService:CustomerService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerMockComponent,CustomerService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerMockComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));    
     //hero = new Hero(1,'Syed','Super Strength', 'Villain');
  });

  // beforeEach(()=>{
  //  hero = new Hero(1,'Syed','Super Strength', 'Villain');
  // } );

  it('should create component', () => expect(comp).toBeDefined() );

//   it('should have expected <h1> text', () => {
//     fixture.detectChanges();
//     const h1 = de.nativeElement;
//     expect(h1.innerText).toMatch(/angular/i,
//       '<h1> should say something about "Angular"');     
//   });  

  it('should be able to create a hero',()=>{
    cust = new Customer('ALFKI','Syed','Super Strength', 'Villain');
    expect(cust.contactName).toMatch('Syed','Contact name should be Syed');
  });
});
