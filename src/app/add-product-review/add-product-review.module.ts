import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core'; 

import { IonicModule } from '@ionic/angular';

import { AddProductReviewPageRoutingModule } from './add-product-review-routing.module';

import { AddProductReviewPage } from './add-product-review.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,   
    AddProductReviewPageRoutingModule
  ],
  declarations: [AddProductReviewPage]
})
export class AddProductReviewPageModule {}
