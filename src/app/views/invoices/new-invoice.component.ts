import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { InvoiceService } from '../../service/invoice.service';
import { User } from '../../model/user';
import { Item } from '../../model/item';
import { Observable } from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import { ItemService } from '../../service/item.service';

@Component({
  templateUrl: 'new-invoice.component.html'
})
export class NewInvoiceComponent implements OnInit{
  userControl = new FormControl();
  options: User[];
  date;
  dueDate;
  itemControl = new FormControl();
  items: Item[];
  itemFilter: Observable<Item[]>;
  constructor(
    private invoiceService: InvoiceService,
    private itemService: ItemService
    ) { }

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
    this.getAllItems();
    
    this.itemFilter = this.itemControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
   
  }
  getallUser() {
    this.invoiceService.getUsers().subscribe(options => {this.options = options; });
  }
  getAllItems () {
    this.itemService.getItems().subscribe(items => { this.items = items; } );
    // this.itemService.getItems().subscribe(items => { console.log(this.items = items); } );
  }

  private _filter(value: Observable<Item[]>): Item[] {
    console.log(value, '_filter here');
    const filterValue = this._normalizeValue(value);
    return this.items.filter(item =>
       this._normalizeValue(item).includes(filterValue));
  }
  private _normalizeValue(value: any) {
    return value.toLowerCase().replace(/\s/g, '');
  }
}
