import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderListComponent } from './order-list/order-list.component';

const routes: Routes = [
  {path: '',
  component: OrderListComponent,
  pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
