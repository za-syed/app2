import { Component } from '@angular/core';

@Component({
  selector: 'main-app',
    template: ` 
   <div>
       <nav class="navbar navbar-inverse">
       <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">Syed's Tutorial</a>
    </div>
    <ul class="nav navbar-nav">      
      <li> <a routerLink="/powers" routerLinkActive="active">Powers</a></li>
      <li> <a routerLink="/heroes" routerLinkActive="active">Heroes</a></li>
      <li> <a routerLink="/customers" routerLinkActive="active">Customers</a></li>
       <li> <a routerLink="/hero" routerLinkActive="active">Hero-Test</a></li>
        <li> <a routerLink="/customers-mock" routerLinkActive="active">Customers-Mock</a></li>
        <li> <a routerLink="/master-detail" routerLinkActive="active">Master-Detail</a></li>
          <li> <a routerLink="/master-detail-customer" routerLinkActive="active">Master-Detail-Customer</a></li>
        
    </ul>
  </div>                                 
        </nav>
        <router-outlet></router-outlet>
        
    </div>
 `,
})
export class MainComponent {

}

