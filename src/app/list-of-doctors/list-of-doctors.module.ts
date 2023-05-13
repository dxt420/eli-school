import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
	
import { IonicModule } from '@ionic/angular';

import { ListOfDoctorsPageRoutingModule } from './list-of-doctors-routing.module';

import { ListOfDoctorsPage } from './list-of-doctors.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TranslateModule,   
    ListOfDoctorsPageRoutingModule
  ],
  declarations: [ListOfDoctorsPage]
})
export class ListOfDoctorsPageModule {}
