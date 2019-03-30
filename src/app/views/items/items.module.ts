// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ItemsListComponent } from './items-lists.component';
import { AddNewItemComponent } from './new-item.component';

// Bills Routing
import { ItemsRoutingModule } from './items-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ItemsRoutingModule
  ],
  declarations: [  	
    ItemsListComponent,
    AddNewItemComponent
  ]
})
export class ItemsModule { }
