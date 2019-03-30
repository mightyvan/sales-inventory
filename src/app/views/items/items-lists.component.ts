import { Component } from '@angular/core';

@Component({
  templateUrl: 'items-lists.component.html'
})
export class ItemsListComponent {

  constructor() { }
    
  expanded(event: any): void {
    // console.log(event);
  }
  
} 
