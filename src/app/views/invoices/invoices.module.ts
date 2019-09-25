// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { InvoicesComponent } from './invoices.component';
import { NewInvoiceComponent } from './new-invoice.component';
import { FormControl } from '@angular/forms';
// Bills Routing
import { InvoicesRoutingModule } from './invoices-routing.module';
import { MaterialModule } from '../../material/material-module';


@NgModule({
  imports: [
    CommonModule,
    InvoicesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
 
  ],
  declarations: [
    InvoicesComponent,
    NewInvoiceComponent
  ]
})
export class InvoicesModule { }
