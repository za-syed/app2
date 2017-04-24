import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TestComponent } from './test.component';
import { HeroFormComponent } from './hero-form.component';
import { PowerFormComponent } from './power-form.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [AppComponent, HeroFormComponent, TestComponent, PowerFormComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
