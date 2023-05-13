import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectTestPage } from './select-test.page';

const routes: Routes = [
  {
    path: '',
    component: SelectTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectTestPageRoutingModule {}
