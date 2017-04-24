import {Component} from '@angular/core';
@Component({
  selector: 'example-app',
  template: `
   <strong>baingan</strong>
  `,
})
export class TestComponent {
  name: string = '';
  //setValue() { this.name = 'Nancy'; }
}

 // <input [(ngModel)]="name" #ctrl="ngModel" required>
    // <p>Value: {{ name }}</p>
    // <p>Valid: {{ ctrl.valid }}</p>
    // <button (click)="setValue()">Set value</button>
