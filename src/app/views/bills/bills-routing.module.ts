import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BillsComponent } from './bills.component';
import { NewBillComponent } from './new-bill.component';
import { PurchaseOrderComponent } from './purchase-order.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Purchase Orders'
    },
    children: [
      {
        path: '',
        component: BillsComponent,
        data: {
          title: 'Bills'
        }
      },      
      {
        path: 'add',
        component: NewBillComponent,
        data: {
          title: 'Add new Bills'
        }
      },
      {
        path: 'purchase-orders',
        component: PurchaseOrderComponent,
        data: {
          title: 'Purchase Orders'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillsRoutingModule {}
