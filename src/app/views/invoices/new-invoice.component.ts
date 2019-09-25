import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { InvoiceService } from '../../service/invoice.service';
import { User } from '../../model/user';


@Component({
  templateUrl: 'new-invoice.component.html'
})
export class NewInvoiceComponent {
  UserControl = new FormControl();
  options: User[];

  constructor(private invoiceService: InvoiceService) { }

  isCollapsed: boolean = false;
  iconCollapse: string = 'icon-arrow-up';

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
    this.iconCollapse = this.isCollapsed ? 'icon-arrow-down' : 'icon-arrow-up';
  }
  ngOnInit(): void {
    this.getallUser();
  }
  getallUser() {
    this.invoiceService.getUsers().subscribe(options => {this.options = options; });
  }
}
