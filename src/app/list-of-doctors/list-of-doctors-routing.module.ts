import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListOfDoctorsPage } from './list-of-doctors.page';

const routes: Routes = [
  {
    path: '',
    component: ListOfDoctorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListOfDoctorsPageRoutingModule {}
