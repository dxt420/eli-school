import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectPaymetMethodPage } from './select-paymet-method.page';

const routes: Routes = [
  {
    path: '',
    component: SelectPaymetMethodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectPaymetMethodPageRoutingModule {}
