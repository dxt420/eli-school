import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { AppointmentBookedPageRoutingModule } from './appointment-booked-routing.module';

import { AppointmentBookedPage } from './appointment-booked.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,     
    AppointmentBookedPageRoutingModule
  ],
  declarations: [AppointmentBookedPage]
})
export class AppointmentBookedPageModule {}
