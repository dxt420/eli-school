import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HospitalInfoPage } from './hospital-info.page';

const routes: Routes = [
  {
    path: '',
    component: HospitalInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HospitalInfoPageRoutingModule {}
