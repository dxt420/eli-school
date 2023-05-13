import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TncPage } from './tnc.page';

const routes: Routes = [
  {
    path: '',
    component: TncPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TncPageRoutingModule {}
