import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PillRemindersPage } from './pill-reminders.page';

const routes: Routes = [
  {
    path: '',
    component: PillRemindersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PillRemindersPageRoutingModule {}
