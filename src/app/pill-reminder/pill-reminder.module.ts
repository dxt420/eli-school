import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { PillReminderPageRoutingModule } from './pill-reminder-routing.module';

import { PillReminderPage } from './pill-reminder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TranslateModule,   
  ReactiveFormsModule,
    PillReminderPageRoutingModule
  ],
  declarations: [PillReminderPage]
})
export class PillReminderPageModule {}
