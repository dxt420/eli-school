import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { OrderTrackingPageRoutingModule } from './order-tracking-routing.module';

import { OrderTrackingPage } from './order-tracking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TranslateModule,  
    OrderTrackingPageRoutingModule
  ],
  declarations: [OrderTrackingPage]
})
export class OrderTrackingPageModule {}
