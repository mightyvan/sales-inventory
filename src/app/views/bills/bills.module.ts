// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BillsComponent } from './bills.component';
import { NewBillComponent } from './new-bill.component';
import { PurchaseOrderComponent } from './purchase-order.component';


// Bills Routing
import { BillsRoutingModule } from './bills-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BillsRoutingModule
  ],
  declarations: [
    BillsComponent, 
    NewBillComponent,
    PurchaseOrderComponent
  ]
})
export class BillsModule { }
