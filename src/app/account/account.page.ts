import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfiniteScrollCustomEvent, LoadingController, NavController } from '@ionic/angular';
import { BuyappalertPage } from '../buyappalert/buyappalert.page';  
import { ModalController } from '@ionic/angular';
import { APP_CONFIG, AppConfig } from '../app.config'; 
import { ApiDjangoService } from 'src/services/api-django.service';
import { AuthenticationService } from 'src/services/authentication.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(@Inject(APP_CONFIG) public config: AppConfig ,
              private route: Router, 
              private navCtrl: NavController,
              private modalController: ModalController,
              private djangoService: ApiDjangoService,
              private loadingCtrl: LoadingController,
              private authService: AuthenticationService,) { }

  data = [];
  school = [];
  students= [];
  currentPage = 1;
  
 


  async loadData(event?: InfiniteScrollCustomEvent) {
    const loading = await this.loadingCtrl.create({
      message: 'Loading..',
      spinner: 'bubbles',
    });
    await loading.present();
 
    this.djangoService.getSchoolInfo(this.currentPage,this.authService.getUsername()).subscribe(
      (res) => {
        loading.dismiss();
        console.log(res);
        this.school[0] = res;
        console.log('School Array : ',this.school[0]);
        // this.school.push(...res.results);
 
        // event?.target.complete();
        // if (event) {
        //   event.target.disabled = res.total_pages === this.currentPage;
        // }
      },
      (err) => {
        console.log(err);
        loading.dismiss();
      }
    );

   
  }



  ngOnInit() {
    
    this.loadData();
  }


  my_profile() {
    this.route.navigate(['./my-profile']);
  } 
  wallet() {
    this.route.navigate(['./wallet']);
  } 
  order_tracking() {
    this.route.navigate(['./order-tracking']);
  }
  myAddress() {
    this.route.navigate(['./addresses']);
  } 
  pillReminders() {
    this.route.navigate(['./pill-reminders']);
  } 
  orders() {
    this.route.navigate(['./orders']);
  }
  contactUs() {
    this.route.navigate(['./contact-us']);
  } 
  savedItems() {
    this.route.navigate(['./saved-items']);
  }
  termsConditions() {
    this.route.navigate(['./tnc']);
  }
  faqs() {
    this.route.navigate(['./faqs']);
  }
  logout() {
    // this.navCtrl.navigateRoot(['./sign-in']);

    this.authService.performLogout();
  }
  change_language() {
    this.route.navigate(['./change-language']);
  }  
  my_appointments() {
    this.route.navigate(['./my-appointments']);
  }  
  my_lab_tests() {
    this.route.navigate(['./my-lab-tests']);
  }  

}
