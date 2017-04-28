import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main.component';
import { AppComponent } from './app.component';
import { TestComponent } from './test.component';
import { HeroFormComponent } from './hero-form.component';
import { PowerComponent} from './power.component';
import { CustomerComponent} from './customer-component';
import { CustomerFormComponent} from './customer-form.component';
import { PowerFormComponent } from './power-form.component';
import { CrisisListComponent } from './crisis-list.component';
import { HeroListComponent } from './hero-list.component';
import { HeroComponent } from './hero-component';
import { CustomerMockComponent } from './customer-mock.component';
import { MasterDetailComponent } from './master-detail.component';
import { MasterDetailCustomerComponent } from './master-detail-customer';
import { PageNotFoundComponent } from './not-found.component';
import { RouterModule, Routes } from '@angular/router';

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

const appRoutes: Routes = [
  { path: 'powers', component: PowerComponent },
  { path: 'heroes', component: AppComponent },
  { path: 'hero', component: HeroComponent },
  { path: 'customers', component: CustomerComponent },
  { path: 'customers-mock',component:CustomerMockComponent},
  { path: 'master-detail', component:MasterDetailComponent},
  { path: 'master-detail-customer', component:MasterDetailCustomerComponent},
  { path: '',   redirectTo: '/heroes', pathMatch: 'full' }
  //{ path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    MainComponent,AppComponent, HeroComponent,
    HeroFormComponent, TestComponent,PowerComponent, PowerFormComponent, MasterDetailCustomerComponent,
    CustomerComponent, CustomerFormComponent,CustomerMockComponent,MasterDetailComponent,
     HeroListComponent,
    CrisisListComponent,
    PageNotFoundComponent
  ],
  //bootstrap: [AppComponent]
  bootstrap:[MainComponent]
})
export class AppModule { }
