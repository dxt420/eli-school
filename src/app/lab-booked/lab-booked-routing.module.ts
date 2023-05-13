import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LabBookedPage } from './lab-booked.page';

const routes: Routes = [
  {
    path: '',
    component: LabBookedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LabBookedPageRoutingModule {}
