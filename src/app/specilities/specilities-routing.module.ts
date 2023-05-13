import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpecilitiesPage } from './specilities.page';

const routes: Routes = [
  {
    path: '',
    component: SpecilitiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpecilitiesPageRoutingModule {}
