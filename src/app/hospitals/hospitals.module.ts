import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { HospitalsPageRoutingModule } from './hospitals-routing.module';

import { HospitalsPage } from './hospitals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TranslateModule,    
    HospitalsPageRoutingModule
  ],
  declarations: [HospitalsPage]
})
export class HospitalsPageModule {}
