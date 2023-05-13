import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddFeedbackPage } from './add-feedback.page';

const routes: Routes = [
  {
    path: '',
    component: AddFeedbackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddFeedbackPageRoutingModule {}
