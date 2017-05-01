"use strict";
var customer_mock_component_1 = require("./customer-mock.component");
var customer_1 = require("./customer");
var customer_service_1 = require("./customer.service");
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
describe('CustomerMockComponent', function () {
    var de;
    var comp;
    var fixture;
    var cust;
    var custService;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [customer_mock_component_1.CustomerMockComponent, customer_service_1.CustomerService]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(customer_mock_component_1.CustomerMockComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
        //hero = new Hero(1,'Syed','Super Strength', 'Villain');
    });
    // beforeEach(()=>{
    //  hero = new Hero(1,'Syed','Super Strength', 'Villain');
    // } );
    it('should create component', function () { return expect(comp).toBeDefined(); });
    //   it('should have expected <h1> text', () => {
    //     fixture.detectChanges();
    //     const h1 = de.nativeElement;
    //     expect(h1.innerText).toMatch(/angular/i,
    //       '<h1> should say something about "Angular"');     
    //   });  
    it('should be able to create a hero', function () {
        cust = new customer_1.Customer('ALFKI', 'Syed', 'Super Strength', 'Villain');
        expect(cust.contactName).toMatch('Syed', 'Contact name should be Syed');
    });
});
//# sourceMappingURL=customer-mock.spec.js.map