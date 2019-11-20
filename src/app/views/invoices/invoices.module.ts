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
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';

@NgModule({
  imports: [
    CommonModule,
    InvoicesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    NgZorroAntdModule,
    NzAutocompleteModule,
    ReactiveFormsModule
  ],
  declarations: [
    InvoicesComponent,
    NewInvoiceComponent
  ]
})
export class InvoicesModule { }
