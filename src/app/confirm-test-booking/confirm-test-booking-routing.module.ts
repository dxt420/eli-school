import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmTestBookingPage } from './confirm-test-booking.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmTestBookingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmTestBookingPageRoutingModule {}
