import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdersInfoPage } from './orders-info.page';

const routes: Routes = [
  {
    path: '',
    component: OrdersInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersInfoPageRoutingModule {}
