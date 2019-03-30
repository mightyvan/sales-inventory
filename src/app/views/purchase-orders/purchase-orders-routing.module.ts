import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PurchaseOrdersComponent } from './purchase-orders.component';
import { NewPurchaseOrderComponent } from './new-purchase-order.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Purchase Orders'
    },
    children: [
      {
        path: '',
        component: PurchaseOrdersComponent,
        data: {
          title: 'Purchase Orders'
        }
      },      
      {
        path: 'new',
        component: NewPurchaseOrderComponent,
        data: {
          title: 'New Purchase Orders'
        }
      }      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseOrdersRoutingModule {}
