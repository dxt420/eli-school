import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { AppointmentBookPageRoutingModule } from './appointment-book-routing.module';

import { AppointmentBookPage } from './appointment-book.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TranslateModule,   
  ReactiveFormsModule,
    AppointmentBookPageRoutingModule
  ],
  declarations: [AppointmentBookPage]
})
export class AppointmentBookPageModule {}
