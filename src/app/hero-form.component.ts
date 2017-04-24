import { Component } from '@angular/core';
import { Hero }    from './hero';
@Component({
  selector: 'hero-form',
  templateUrl: './hero-form.component.html',
   styleUrls: ['./forms.css']
})
export class HeroFormComponent {
  lastIndex=20;
  heroes = [new Hero(1,'Dr Fuck', 'Really Smart','Doctor'),
  new Hero(2,'Dr Duck', 'Super Hot','Teacher'),
  new Hero(3,'Dr Chuck', 'Weather Changer','Actor')
  ];
  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  submitted = false;
  onSubmit() { this.submitted = true; }
  newHero() {
    this.model = new Hero(++this.lastIndex, '', '');
  }
  AddHero(){
    this.heroes.push(this.model);    
  }
  initializeForEdit(hero:Hero)
  {
    this.model =hero;
  }
}
