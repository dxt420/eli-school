import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LabMapViewPage } from './lab-map-view.page';

const routes: Routes = [
  {
    path: '',
    component: LabMapViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LabMapViewPageRoutingModule {}
