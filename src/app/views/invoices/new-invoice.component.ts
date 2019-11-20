import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { InvoiceService } from '../../service/invoice.service';
import { User } from '../../model/user';
import { Item } from '../../model/item';
import { Observable, Subject } from 'rxjs';
import {startWith, map, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { ItemService } from '../../service/item.service';


@Component({
  templateUrl: 'new-invoice.component.html'
})
export class NewInvoiceComponent implements OnInit{
  userControl = new FormControl();
  users$: User[];
  date;
  dueDate;
  inputValue: string;
  items$: Observable<Item[]>;
  itemIndex: Subject<Item[]>;
  private searchTerms = new Subject<string>();
  search(term: string): void {
    this.searchTerms.next(term);
  }
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
    this.items$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.itemService.search(term)),
    );
  }
  getallUser() {
    return this.invoiceService.getUsers().subscribe(options => {this.users$ = options; });
  }
}
