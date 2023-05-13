import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestBookingPage } from './test-booking.page';

const routes: Routes = [
  {
    path: '',
    component: TestBookingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestBookingPageRoutingModule {}
