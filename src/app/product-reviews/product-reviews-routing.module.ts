import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductReviewsPage } from './product-reviews.page';

const routes: Routes = [
  {
    path: '',
    component: ProductReviewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductReviewsPageRoutingModule {}
