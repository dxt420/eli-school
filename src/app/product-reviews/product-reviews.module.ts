import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core'; 
   
import { IonicModule } from '@ionic/angular';

import { ProductReviewsPageRoutingModule } from './product-reviews-routing.module';

import { ProductReviewsPage } from './product-reviews.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,  
    ProductReviewsPageRoutingModule
  ],
  declarations: [ProductReviewsPage]
})
export class ProductReviewsPageModule {}
