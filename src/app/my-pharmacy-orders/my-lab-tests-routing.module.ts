import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyLabTestsPage } from './my-lab-tests.page';

const routes: Routes = [
  {
    path: '',
    component: MyLabTestsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyLabTestsPageRoutingModule {}
