import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PowerComponent } from './power.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  {
    path: 'powers',
    component: PowerComponent
  },
//   {
//     path: 'detail/:id',
//     component: HeroDetailComponent
//   },
  {
    path: 'heroes',
    component: AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [AppComponent, PowerComponent];
