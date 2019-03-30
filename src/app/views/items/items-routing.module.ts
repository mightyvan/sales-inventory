import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemsListComponent } from './items-lists.component';
import { AddNewItemComponent } from './new-item.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Items',      
    },
    children: [
      {
        path: '',
        component: ItemsListComponent,
      },
      {
        path: 'new',
        component: AddNewItemComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule {}
