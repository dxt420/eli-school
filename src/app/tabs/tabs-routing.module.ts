import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'doctors',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../doctors/doctors.module').then(m => m.DoctorsPageModule)
          }
        ]
      },
      {
        path: 'hospitals',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../hospitals/hospitals.module').then(m => m.HospitalsPageModule)
          }
        ]
      },  
	  {
        path: 'lab_test',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../lab-test/lab-test.module').then(m => m.LabTestPageModule)
          }
        ]
      },
	 {
      path: 'more',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../account/account.module').then(m => m.AccountPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
