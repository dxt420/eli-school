import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { ListOfLabPageRoutingModule } from './list-of-lab-routing.module';

import { ListOfLabPage } from './list-of-lab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ListOfLabPageRoutingModule
  ],
  declarations: [ListOfLabPage]
})
export class ListOfLabPageModule {}
