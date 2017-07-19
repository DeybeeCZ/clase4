import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="row">
  <app-menu *ngIf="verMenu===true"></app-menu>
  <button (click)="ocultar()">ocultar</button>
  <app-info></app-info>
  <app-action></app-action>
  <app-color></app-color>
  </div>
  `
})
export class AppComponent  { name = 'Angular'; 
  verMenu:boolean=true;
  ocultar(){
    this.verMenu=false;
  }
}
