import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
	  
import { IonicModule } from '@ionic/angular';

import { PillRemindersPageRoutingModule } from './pill-reminders-routing.module';

import { PillRemindersPage } from './pill-reminders.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TranslateModule,  
    PillRemindersPageRoutingModule
  ],
  declarations: [PillRemindersPage]
})
export class PillRemindersPageModule {}
