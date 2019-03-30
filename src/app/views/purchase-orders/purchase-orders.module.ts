// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PurchaseOrdersComponent } from './purchase-orders.component';
import { NewPurchaseOrderComponent } from './new-purchase-order.component';

// Bills Routing
import { PurchaseOrdersRoutingModule } from './purchase-orders-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PurchaseOrdersRoutingModule
  ],
  declarations: [
    PurchaseOrdersComponent, 
    NewPurchaseOrderComponent,
  ]
})
export class PurchaseOrdersModule { }
