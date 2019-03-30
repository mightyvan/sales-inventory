import { Component } from '@angular/core';

@Component({
  templateUrl: 'invoices.component.html'
})
export class InvoicesComponent {

  constructor() { }
    
  expanded(event: any): void {
    // console.log(event);
  }
  
} 
