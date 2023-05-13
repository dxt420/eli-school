import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { ConfirmTestBookingPageRoutingModule } from './confirm-test-booking-routing.module';

import { ConfirmTestBookingPage } from './confirm-test-booking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ConfirmTestBookingPageRoutingModule
  ],
  declarations: [ConfirmTestBookingPage]
})
export class ConfirmTestBookingPageModule {}
