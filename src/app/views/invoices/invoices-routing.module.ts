import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvoicesComponent } from './invoices.component';
import { NewInvoiceComponent } from './new-invoice.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Items',      
    },
    children: [
      {
        path: '',
        component: InvoicesComponent,
      },
      {
        path: 'new',
        component: NewInvoiceComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoicesRoutingModule {}
