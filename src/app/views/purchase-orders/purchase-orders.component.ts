import { Component } from '@angular/core';

@Component({
  templateUrl: 'purchase-orders.component.html'
})
export class PurchaseOrdersComponent {

  constructor() { }
    
  expanded(event: any): void {
    // console.log(event);
  }
  
} 
