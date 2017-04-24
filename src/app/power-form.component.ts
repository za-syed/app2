import { Component } from '@angular/core';
import { Power }    from './power';
@Component({
  selector: 'power-form',
  templateUrl: './power-form.component.html'
})
export class PowerFormComponent {
  lastIndex=20;
  powers = [new Power(1,'Heat Vision', 'Use the heat rays coming from eyes to burn something from a distance'),
  new Power(2,'X-ray Vision', 'Use the X-rays to see through opague objects '),
  new Power(3,'Flying', 'The worst super power ever')
  ];
  
  model = new Power(1, 'Heat Vision', 'Use the heat rays coming from eyes to burn something from a distance');
  submitted = false; 
  newPower() {
    this.model = new Power(++this.lastIndex, '', '');
  }
  AddPower(){
    this.powers.push(this.model);    
  }
  initializeForEdit(power:Power)
  {
    this.model =power;
  }
}
