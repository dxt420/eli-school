import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppointmentBookPage } from './appointment-book.page';

const routes: Routes = [
  {
    path: '',
    component: AppointmentBookPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppointmentBookPageRoutingModule {}
