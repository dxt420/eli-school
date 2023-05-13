import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddProductReviewPage } from './add-product-review.page';

const routes: Routes = [
  {
    path: '',
    component: AddProductReviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddProductReviewPageRoutingModule {}
