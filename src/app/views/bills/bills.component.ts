import { Component } from '@angular/core';

@Component({
  templateUrl: 'bills.component.html'
})
export class BillsComponent {

  constructor() { }
    
  expanded(event: any): void {
    // console.log(event);
  }
  
} 
