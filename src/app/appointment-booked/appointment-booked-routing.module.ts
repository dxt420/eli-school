import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppointmentBookedPage } from './appointment-booked.page';

const routes: Routes = [
  {
    path: '',
    component: AppointmentBookedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppointmentBookedPageRoutingModule {}
