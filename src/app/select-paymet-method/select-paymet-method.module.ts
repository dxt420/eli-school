import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core'; 

import { IonicModule } from '@ionic/angular';

import { SelectPaymetMethodPageRoutingModule } from './select-paymet-method-routing.module';

import { SelectPaymetMethodPage } from './select-paymet-method.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TranslateModule,   
    SelectPaymetMethodPageRoutingModule
  ],
  declarations: [SelectPaymetMethodPage]
})
export class SelectPaymetMethodPageModule {}
