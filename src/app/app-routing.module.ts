import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/guards/auth.guard';
import { AutoLoginGuard } from 'src/guards/auto-login.guard';
import { AuthGuardService } from 'src/services/auth-guard.service';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'home', 
  //   pathMatch: 'full'
  // },	

  // {
  //   path: '',
  //   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
  //   canLoad: [AuthGuard] 
  // },
  //  {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  // {
  //   path: 'sign-in',
  //   loadChildren: () => import('./sign-in/sign-in.module').then( m => m.SignInPageModule)
  // },
  // {
  //   path: '',
  //   redirectTo: '', 
  //   pathMatch: 'full'
  // },	
  // {
  //   path: '',
  //   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
  //   canLoad: [AuthGuardService]
  // },
  {
    path: 'sign-in',
    loadChildren: () => import('./sign-in/sign-in.module').then( m => m.SignInPageModule),
    canLoad: [AutoLoginGuard] 
  },
  {
      path: 'tabs',
      loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
      // canLoad: [AuthGuard] 
    },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'verification',
    loadChildren: () => import('./verification/verification.module').then( m => m.VerificationPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./categories/categories.module').then( m => m.CategoriesPageModule),
    canLoad: [AuthGuardService]
  },
  {
    path: 'product-list',
    loadChildren: () => import('./product-list/product-list.module').then( m => m.ProductListPageModule)
  },
  {
    path: 'product-info',
    loadChildren: () => import('./product-info/product-info.module').then( m => m.ProductInfoPageModule)
  },
  {
    path: 'my-cart',
    loadChildren: () => import('./my-cart/my-cart.module').then( m => m.MyCartPageModule)
  },
  {
    path: 'select-paymet-method',
    loadChildren: () => import('./select-paymet-method/select-paymet-method.module').then( m => m.SelectPaymetMethodPageModule)
  },
  {
    path: 'order-placed',
    loadChildren: () => import('./order-placed/order-placed.module').then( m => m.OrderPlacedPageModule)
  },
  {
    path: 'doctors',
    loadChildren: () => import('./doctors/doctors.module').then( m => m.DoctorsPageModule)
  },
  {
    path: 'specilities',
    loadChildren: () => import('./specilities/specilities.module').then( m => m.SpecilitiesPageModule)
  },
  {
    path: 'list-of-doctors',
    loadChildren: () => import('./list-of-doctors/list-of-doctors.module').then( m => m.ListOfDoctorsPageModule)
  },
  {
    path: 'map-view',
    loadChildren: () => import('./map-view/map-view.module').then( m => m.MapViewPageModule)
  },
  {
    path: 'filter',
    loadChildren: () => import('./filter/filter.module').then( m => m.FilterPageModule)
  },
  {
    path: 'doctor-profile',
    loadChildren: () => import('./doctor-profile/doctor-profile.module').then( m => m.DoctorProfilePageModule)
  },
  {
    path: 'student-profile',
    // loadChildren: () => import('./student-profile/doctor-profile.module').then( m => m.DoctorProfilePageModule)
    loadChildren: () => import('./student-profile/appointment-detail.module').then( m => m.AppointmentDetailPageModule)
  },
  
  {
    path: 'appointment-book',
    loadChildren: () => import('./appointment-book/appointment-book.module').then( m => m.AppointmentBookPageModule)
  },
  {
    path: 'add-feedback',
    loadChildren: () => import('./add-feedback/add-feedback.module').then( m => m.AddFeedbackPageModule)
  },
  {
    path: 'hospitals',
    loadChildren: () => import('./hospitals/hospitals.module').then( m => m.HospitalsPageModule)
  },
  {
    path: 'hospital-map-view',
    loadChildren: () => import('./hospital-map-view/hospital-map-view.module').then( m => m.HospitalMapViewPageModule)
  },
  {
    path: 'hospital-info',
    loadChildren: () => import('./hospital-info/hospital-info.module').then( m => m.HospitalInfoPageModule)
  },
  {
    path: 'my-appointments',
    loadChildren: () => import('./my-appointments/my-appointments.module').then( m => m.MyAppointmentsPageModule)
  },
  {
    path: 'appointment-detail',
    loadChildren: () => import('./appointment-detail/appointment-detail.module').then( m => m.AppointmentDetailPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'my-profile',
    loadChildren: () => import('./my-profile/my-profile.module').then( m => m.MyProfilePageModule)
  },
  {
    path: 'addresses',
    loadChildren: () => import('./addresses/addresses.module').then( m => m.AddressesPageModule)
  },
  {
    path: 'add-address',
    loadChildren: () => import('./add-address/add-address.module').then( m => m.AddAddressPageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./contact-us/contact-us.module').then( m => m.ContactUsPageModule)
  },
  {
    path: 'faqs',
    loadChildren: () => import('./faqs/faqs.module').then( m => m.FaqsPageModule)
  },
  {
    path: 'tnc',
    loadChildren: () => import('./tnc/tnc.module').then( m => m.TncPageModule)
  },
  {
    path: 'title',
    loadChildren: () => import('./title/title.module').then( m => m.TitlePageModule)
  },
  {
    path: 'change-language',
    loadChildren: () => import('./change-language/change-language.module').then( m => m.ChangeLanguagePageModule)
  },
  {
    path: 'seller-profile',
    loadChildren: () => import('./seller-profile/seller-profile.module').then( m => m.SellerProfilePageModule)
  },
  {
    path: 'prescription',
    loadChildren: () => import('./prescription/prescription.module').then( m => m.PrescriptionPageModule)
  },
  {
    path: 'pill-reminders',
    loadChildren: () => import('./pill-reminders/pill-reminders.module').then( m => m.PillRemindersPageModule)
  },
  {
    path: 'pill-reminder',
    loadChildren: () => import('./pill-reminder/pill-reminder.module').then( m => m.PillReminderPageModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then( m => m.OrdersPageModule)
  },
  {
    path: 'orders-info',
    loadChildren: () => import('./orders-info/orders-info.module').then( m => m.OrdersInfoPageModule)
  },
  {
    path: 'order-tracking',
    loadChildren: () => import('./order-tracking/order-tracking.module').then( m => m.OrderTrackingPageModule)
  },
  {
    path: 'saved-items',
    loadChildren: () => import('./saved-items/saved-items.module').then( m => m.SavedItemsPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'chat2',
    loadChildren: () => import('./chat2/chat2.module').then( m => m.Chat2PageModule)
  },
  {
    path: 'product-reviews',
    loadChildren: () => import('./product-reviews/product-reviews.module').then( m => m.ProductReviewsPageModule)
  },
  {
    path: 'offers',
    loadChildren: () => import('./offers/offers.module').then( m => m.OffersPageModule)
  },
  {
    path: 'confirm-order',
    loadChildren: () => import('./confirm-order/confirm-order.module').then( m => m.ConfirmOrderPageModule)
  },
  {
    path: 'wallet',
    loadChildren: () => import('./wallet/wallet.module').then( m => m.WalletPageModule)
  },
  {
    path: 'send-to-bank',
    loadChildren: () => import('./send-to-bank/send-to-bank.module').then( m => m.SendToBankPageModule)
  },
  {
    path: 'add-money',
    loadChildren: () => import('./add-money/add-money.module').then( m => m.AddMoneyPageModule)
  },
  {
    path: 'doctor-reviews',
    loadChildren: () => import('./doctor-reviews/doctor-reviews.module').then( m => m.DoctorReviewsPageModule)
  },
  {
    path: 'appointment-booked',
    loadChildren: () => import('./appointment-booked/appointment-booked.module').then( m => m.AppointmentBookedPageModule)
  },
  {
    path: 'add-product-review',
    loadChildren: () => import('./add-product-review/add-product-review.module').then( m => m.AddProductReviewPageModule)
  },
  {
    path: 'buyappalert',
    loadChildren: () => import('./buyappalert/buyappalert.module').then( m => m.BuyappalertPageModule)
  },
  {
    path: 'vt-popup',
    loadChildren: () => import('./vt-popup/vt-popup.module').then( m => m.VtPopupPageModule)
  },
  {
    path: 'select-day',
    loadChildren: () => import('./select-day/select-day.module').then( m => m.SelectDayPageModule)
  },
  {
    path: 'lab-test',
    loadChildren: () => import('./lab-test/lab-test.module').then( m => m.LabTestPageModule)
  },
  {
    path: 'list-of-lab',
    loadChildren: () => import('./list-of-lab/list-of-lab.module').then( m => m.ListOfLabPageModule)
  },
  {
    path: 'lab-info',
    loadChildren: () => import('./lab-info/lab-info.module').then( m => m.LabInfoPageModule)
  },
  {
    path: 'select-test',
    loadChildren: () => import('./select-test/select-test.module').then( m => m.SelectTestPageModule)
  },
  {
    path: 'test-booking',
    loadChildren: () => import('./test-booking/test-booking.module').then( m => m.TestBookingPageModule)
  },
  {
    path: 'lab-booked',
    loadChildren: () => import('./lab-booked/lab-booked.module').then( m => m.LabBookedPageModule)
  },
  {
    path: 'lab-map-view',
    loadChildren: () => import('./lab-map-view/lab-map-view.module').then( m => m.LabMapViewPageModule)
  },
  {
    path: 'confirm-test-booking',
    loadChildren: () => import('./confirm-test-booking/confirm-test-booking.module').then( m => m.ConfirmTestBookingPageModule)
  },
  {
    path: 'my-lab-tests',
    loadChildren: () => import('./my-lab-tests/my-lab-tests.module').then( m => m.MyLabTestsPageModule)
  },
  {
    path: 'my-pharmacy-orders',
    loadChildren: () => import('./my-pharmacy-orders/my-lab-tests.module').then( m => m.MyLabTestsPageModule)
  },

 
  {
      path: '',
      redirectTo: 'sign-in', 
      pathMatch: 'full'
    },	

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
