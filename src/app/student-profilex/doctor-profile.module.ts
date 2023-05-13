import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { DoctorProfilePageRoutingModule } from './doctor-profile-routing.module';

import { DoctorProfilePage } from './doctor-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TranslateModule,    
    DoctorProfilePageRoutingModule
  ],
  declarations: [DoctorProfilePage]
})
export class DoctorProfilePageModule {}
 