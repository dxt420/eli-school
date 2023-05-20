import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { InfiniteScrollCustomEvent, IonSlides, LoadingController } from '@ionic/angular';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { ApiDjangoService } from 'src/services/api-django.service';
import { AuthenticationService } from 'src/services/authentication.service';

@Component({
  selector: 'app-hospital-info',
  templateUrl: './hospital-info.page.html',
  styleUrls: ['./hospital-info.page.scss'],
})
export class HospitalInfoPage implements OnInit {
  favorite_icon = false;
  segment = 0;
  pharmacy: any;



  school = [];
  currentPage = 1;




  // constructor(private router: ActivatedRoute, private route: Router,private statusBar: StatusBar) {
  //   this.router.queryParams.subscribe(params => {
  //     if (this.route.getCurrentNavigation().extras.state) {
  //       console.log('hi');
  //       console.log(this.route.getCurrentNavigation().extras.state.pharmacy);
  //       this.pharmacy = this.route.getCurrentNavigation().extras.state.pharmacy;
  //       console.log(this.pharmacy);
  //     }
  //   });
  // }


  constructor(private route: ActivatedRoute,
    private router: Router,
    private djangoService: ApiDjangoService,
    private loadingCtrl: LoadingController,
    private authService: AuthenticationService,
    private statusBar: StatusBar) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        console.log('hi');
        this.pharmacy = this.router.getCurrentNavigation().extras.state.pharmacy;
        console.log(this.pharmacy);
      }
    });
  }

  async loadData(event?: InfiniteScrollCustomEvent) {
    const loading = await this.loadingCtrl.create({
      message: 'Loading..',
      spinner: 'bubbles',
    });
    await loading.present();

    this.djangoService.getSchoolInfo(this.currentPage, this.authService.getUsername()).subscribe(
      (res) => {
        loading.dismiss();
        console.log(res);
        this.school[0] = res;
        console.log('School Array : ', this.school[0]);
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
    this.statusBar.overlaysWebView(true);
    this.statusBar.backgroundColorByHexString('rgba(0, 0, 0, 0)');
  }



  toggleSaveIcon1() {
    this.favorite_icon = !this.favorite_icon;
  }

  //  doctor_profile() {
  //     this.route.navigate(['./doctor-profile']);
  //   }


  request_pharmacy(params: any) {
    console.log(params);

    // this.route.navigate(['./student-profile'], params);
    let navigationExtras: NavigationExtras = {
      state: {
        // student: JSON.stringify(params)
        pharmacy: params,
        school: this.school[0]
      }
    };
    this.router.navigate(['./pill-reminder'], navigationExtras);
  }
}
