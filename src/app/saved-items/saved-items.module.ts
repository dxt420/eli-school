import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
  
import { IonicModule } from '@ionic/angular';

import { SavedItemsPageRoutingModule } from './saved-items-routing.module';

import { SavedItemsPage } from './saved-items.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TranslateModule,  
    SavedItemsPageRoutingModule
  ],
  declarations: [SavedItemsPage]
})
export class SavedItemsPageModule {}
