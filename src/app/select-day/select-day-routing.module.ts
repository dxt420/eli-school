import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectDayPage } from './select-day.page';

const routes: Routes = [
  {
    path: '',
    component: SelectDayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectDayPageRoutingModule {}
