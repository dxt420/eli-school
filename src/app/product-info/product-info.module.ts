import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core'; 
import { IonicModule } from '@ionic/angular';

import { ProductInfoPageRoutingModule } from './product-info-routing.module';

import { ProductInfoPage } from './product-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
   	TranslateModule,   
    ProductInfoPageRoutingModule
  ],
  declarations: [ProductInfoPage]
})
export class ProductInfoPageModule {}
