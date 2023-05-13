import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { ApiDjangoService } from 'src/services/api-django.service';
import { AuthenticationService } from 'src/services/authentication.service';

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.page.html',
  styleUrls: ['./hospitals.page.scss'],
})
export class HospitalsPage implements OnInit {


  data = [];
  school = [];
  students= [];
  currentPage = 1;
  
  constructor(private route: Router, 
              private statusBar: StatusBar,
              private djangoService: ApiDjangoService,
              private loadingCtrl: LoadingController,
              private authService: AuthenticationService,
              ) { }


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
    this.statusBar.overlaysWebView(false);
    this.statusBar.backgroundColorByHexString('#ffffff');
    this.loadData();
  }

  hospital_info() {
    this.route.navigate(['./hospital-info']);
  }
  map() {
    this.route.navigate(['./hospital-map-view']);
  }
  search() {
    this.route.navigate(['./specilities']);
  }
  set_location() {
    this.route.navigate(['./add-address']);
  }

  seller_profile() {
    this.route.navigate(['./seller-profile']);
  } 
}
