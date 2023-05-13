import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
 
import { IonicModule } from '@ionic/angular';

import { AddressesPageRoutingModule } from './addresses-routing.module';

import { AddressesPage } from './addresses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TranslateModule,  
    AddressesPageRoutingModule
  ],
  declarations: [AddressesPage]
})
export class AddressesPageModule {}
