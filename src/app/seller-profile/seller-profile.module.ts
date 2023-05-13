import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { SellerProfilePageRoutingModule } from './seller-profile-routing.module';

import { SellerProfilePage } from './seller-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TranslateModule,   
    SellerProfilePageRoutingModule
  ],
  declarations: [SellerProfilePage]
})
export class SellerProfilePageModule {}
