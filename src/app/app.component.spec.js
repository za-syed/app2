"use strict";
var app_component_1 = require("./app.component");
var hero_1 = require("./hero");
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
describe('AppComponent', function () {
    var de;
    var se;
    var comp;
    var fixture;
    var hero;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [app_component_1.AppComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
        se = fixture.debugElement.query(platform_browser_1.By.css('strong'));
        //hero = new Hero(1,'Syed','Super Strength', 'Villain');
    });
    // beforeEach(()=>{
    //  hero = new Hero(1,'Syed','Super Strength', 'Villain');
    // } );
    it('should create component', function () { return expect(comp).toBeDefined(); });
    it('should have expected <h1> text', function () {
        fixture.detectChanges();
        var h1 = de.nativeElement;
        expect(h1.innerText).toMatch(/angular/i, '<h1> should say something about "Angular"');
    });
    it('should have expected the text in <strong> should say', function () {
        var s = se.nativeElement;
        expect(s.innerText).toMatch(/Fuck You/i, '<strong> should say Fuck you');
    });
    it('should be able to create a hero', function () {
        hero = new hero_1.Hero(1, 'Syed', 'Super Strength', 'Villain');
        expect(hero.name).toMatch('Syed', 'Hero name should be Syed');
    });
});
//# sourceMappingURL=app.component.spec.js.map