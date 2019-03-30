import { Component } from '@angular/core';

@Component({
  templateUrl: 'purchase-orders.component.html'
})
export class PurchaseOrderComponent {

  constructor() { }
    
  expanded(event: any): void {
    // console.log(event);
  }
  
} 
