import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { SelectTestPageRoutingModule } from './select-test-routing.module';

import { SelectTestPage } from './select-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    SelectTestPageRoutingModule
  ],
  declarations: [SelectTestPage]
})
export class SelectTestPageModule {}
