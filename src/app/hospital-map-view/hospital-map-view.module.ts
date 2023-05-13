import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { HospitalMapViewPageRoutingModule } from './hospital-map-view-routing.module';

import { HospitalMapViewPage } from './hospital-map-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TranslateModule,   
    HospitalMapViewPageRoutingModule
  ],
  declarations: [HospitalMapViewPage]
})
export class HospitalMapViewPageModule {}
