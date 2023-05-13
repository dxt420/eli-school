import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LabMapViewPageRoutingModule } from './lab-map-view-routing.module';

import { LabMapViewPage } from './lab-map-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LabMapViewPageRoutingModule
  ],
  declarations: [LabMapViewPage]
})
export class LabMapViewPageModule {}
