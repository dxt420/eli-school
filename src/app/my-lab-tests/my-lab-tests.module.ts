import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { MyLabTestsPageRoutingModule } from './my-lab-tests-routing.module';

import { MyLabTestsPage } from './my-lab-tests.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    MyLabTestsPageRoutingModule
  ],
  declarations: [MyLabTestsPage]
})
export class MyLabTestsPageModule {}
