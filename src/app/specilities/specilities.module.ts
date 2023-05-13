import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
 
import { IonicModule } from '@ionic/angular';

import { SpecilitiesPageRoutingModule } from './specilities-routing.module';

import { SpecilitiesPage } from './specilities.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TranslateModule,   
    SpecilitiesPageRoutingModule
  ],
  declarations: [SpecilitiesPage]
})
export class SpecilitiesPageModule {}
 