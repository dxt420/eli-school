import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorReviewsPage } from './doctor-reviews.page';

const routes: Routes = [
  {
    path: '',
    component: DoctorReviewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorReviewsPageRoutingModule {}
