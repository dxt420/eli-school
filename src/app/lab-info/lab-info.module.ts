import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { LabInfoPageRoutingModule } from './lab-info-routing.module';

import { LabInfoPage } from './lab-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    LabInfoPageRoutingModule
  ],
  declarations: [LabInfoPage]
})
export class LabInfoPageModule {}
