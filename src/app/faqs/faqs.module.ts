import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
	
import { IonicModule } from '@ionic/angular';

import { FaqsPageRoutingModule } from './faqs-routing.module';

import { FaqsPage } from './faqs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TranslateModule,   
    FaqsPageRoutingModule
  ],
  declarations: [FaqsPage]
})
export class FaqsPageModule {}
