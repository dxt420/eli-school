import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { DoctorReviewsPageRoutingModule } from './doctor-reviews-routing.module';

import { DoctorReviewsPage } from './doctor-reviews.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,    
    DoctorReviewsPageRoutingModule
  ],
  declarations: [DoctorReviewsPage]
})
export class DoctorReviewsPageModule {}
