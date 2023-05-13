import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LabBookedPageRoutingModule } from './lab-booked-routing.module';

import { LabBookedPage } from './lab-booked.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LabBookedPageRoutingModule
  ],
  declarations: [LabBookedPage]
})
export class LabBookedPageModule {}
