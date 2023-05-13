import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { DoctorsPageRoutingModule } from './doctors-routing.module';

import { DoctorsPage } from './doctors.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TranslateModule,   
    DoctorsPageRoutingModule
  ],
  declarations: [DoctorsPage]
})
export class DoctorsPageModule {}
