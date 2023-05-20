import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { ApiDjangoService } from 'src/services/api-django.service';
import { AuthenticationService } from 'src/services/authentication.service';

@Component({
  selector: 'app-lab-info',
  templateUrl: './lab-info.page.html',
  styleUrls: ['./lab-info.page.scss'],
})
export class LabInfoPage implements OnInit {

  lab: any;
  school = [];
  currentPage = 1;
  // constructor(private route: Router,  private statusBar: StatusBar) { }

  constructor(private route: ActivatedRoute, 
              private router: Router,
              private djangoService: ApiDjangoService,
              private loadingCtrl: LoadingController,
              private authService: AuthenticationService) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        console.log('hi');
        this.lab = this.router.getCurrentNavigation().extras.state.lab;
        console.log(this.lab);
      }
    });
  }

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


  select_test() {
    this.router.navigate(['./select-test']);
  }


  request_test(params: any) {
    console.log(params);
   
    // this.route.navigate(['./student-profile'], params);
    let navigationExtras: NavigationExtras = {
      state: {
            // student: JSON.stringify(params)
            lab: params,
            school: this.school[0]
          }
        };
    this.router.navigate(['./confirm-test-booking'], navigationExtras);
  }


}
