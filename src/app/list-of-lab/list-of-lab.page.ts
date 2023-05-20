import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router'; 
import { LoadingController, InfiniteScrollCustomEvent } from '@ionic/angular';
import { ApiDjangoService } from 'src/services/api-django.service';
import { AuthenticationService } from 'src/services/authentication.service';
@Component({
  selector: 'app-list-of-lab',
  templateUrl: './list-of-lab.page.html',
  styleUrls: ['./list-of-lab.page.scss'],
})
export class ListOfLabPage implements OnInit {
  data = [];
  school = [];
  students= [];
  currentPage = 1;

  labs = [];
  
  constructor(private route: Router, 
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


    this.djangoService.getLabs(this.currentPage).subscribe(
      (res) => {
        loading.dismiss();
        console.log(res);
        // this.pharmacies = res;
        // console.log('School Array : ',this.school[0]);
        this.labs.push(...res.results);
 
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

 

  lab_info(params: any) {
    console.log(params);
   
    // this.route.navigate(['./student-profile'], params);
    let navigationExtras: NavigationExtras = {
      state: {
            // student: JSON.stringify(params)
            lab: params
          }
        };
        // this.route.navigate(['./doctor-profile'], navigationExtras);
        this.route.navigate(['./lab-info'], navigationExtras);

  }
  lab_map_view() {
    this.route.navigate(['./lab-map-view']);
  }
}
