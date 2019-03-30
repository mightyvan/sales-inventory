// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { InvoicesComponent } from './invoices.component';
import { NewInvoiceComponent } from './new-invoice.component';

// Bills Routing
import { InvoicesRoutingModule } from './invoices-routing.module';

@NgModule({
  imports: [
    CommonModule,
    InvoicesRoutingModule
  ],
  declarations: [  	
    InvoicesComponent,
    NewInvoiceComponent
  ]
})
export class InvoicesModule { }
