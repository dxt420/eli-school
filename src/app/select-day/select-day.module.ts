import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { SelectDayPageRoutingModule } from './select-day-routing.module';

import { SelectDayPage } from './select-day.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    SelectDayPageRoutingModule
  ],
  declarations: [SelectDayPage]
})
export class SelectDayPageModule {}
