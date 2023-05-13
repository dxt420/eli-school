import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListOfLabPage } from './list-of-lab.page';

const routes: Routes = [
  {
    path: '',
    component: ListOfLabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListOfLabPageRoutingModule {}
