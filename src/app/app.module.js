"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var main_component_1 = require("./main.component");
var app_component_1 = require("./app.component");
var test_component_1 = require("./test.component");
var hero_form_component_1 = require("./hero-form.component");
var power_component_1 = require("./power.component");
var customer_component_1 = require("./customer-component");
var customer_form_component_1 = require("./customer-form.component");
var power_form_component_1 = require("./power-form.component");
var crisis_list_component_1 = require("./crisis-list.component");
var hero_list_component_1 = require("./hero-list.component");
var hero_component_1 = require("./hero-component");
var customer_mock_component_1 = require("./customer-mock.component");
var master_detail_component_1 = require("./master-detail.component");
var master_detail_customer_1 = require("./master-detail-customer");
var not_found_component_1 = require("./not-found.component");
var router_1 = require("@angular/router");
// const appRoutes: Routes = [
//   { path: 'powers', component: PowerComponent },
//   { path: 'heroes', component: AppComponent },
// ];
// const appRoutes: Routes = [
//   { path: 'crisis-center', component: CrisisListComponent },
//   { path: 'heroes', component: HeroListComponent },
//   { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
//   { path: '**', component: PageNotFoundComponent }
// ];
var appRoutes = [
    { path: 'powers', component: power_component_1.PowerComponent },
    { path: 'heroes', component: app_component_1.AppComponent },
    { path: 'hero', component: hero_component_1.HeroComponent },
    { path: 'customers', component: customer_component_1.CustomerComponent },
    { path: 'customers-mock', component: customer_mock_component_1.CustomerMockComponent },
    { path: 'master-detail', component: master_detail_component_1.MasterDetailComponent },
    { path: 'master-detail-customer', component: master_detail_customer_1.MasterDetailCustomerComponent },
    { path: '', redirectTo: '/heroes', pathMatch: 'full' }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            router_1.RouterModule.forRoot(appRoutes)
        ],
        declarations: [
            main_component_1.MainComponent, app_component_1.AppComponent, hero_component_1.HeroComponent,
            hero_form_component_1.HeroFormComponent, test_component_1.TestComponent, power_component_1.PowerComponent, power_form_component_1.PowerFormComponent, master_detail_customer_1.MasterDetailCustomerComponent,
            customer_component_1.CustomerComponent, customer_form_component_1.CustomerFormComponent, customer_mock_component_1.CustomerMockComponent, master_detail_component_1.MasterDetailComponent,
            hero_list_component_1.HeroListComponent,
            crisis_list_component_1.CrisisListComponent,
            not_found_component_1.PageNotFoundComponent
        ],
        //bootstrap: [AppComponent]
        bootstrap: [main_component_1.MainComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map