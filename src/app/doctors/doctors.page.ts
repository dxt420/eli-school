import { Component, OnInit } from '@angular/core'; 
import { NavigationExtras, Router } from '@angular/router';
import { LoadingController, InfiniteScrollCustomEvent } from '@ionic/angular';
import { ApiDjangoService } from 'src/services/api-django.service';
import { AuthenticationService } from 'src/services/authentication.service';
@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.page.html',
  styleUrls: ['./doctors.page.scss'],
})
export class DoctorsPage implements OnInit {

  data = [];
  school = [];
  doctors= [];
  currentPage = 1;

  constructor( 
    private route: Router,
    private djangoService: ApiDjangoService,
    private loadingCtrl: LoadingController,
    private authService: AuthenticationService,
    ) { }

  ngOnInit() {
    this.loadData();
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


    this.djangoService.getDoctors(this.currentPage).subscribe(
      (res) => {
        loading.dismiss();
        console.log(res);
        // this.students = res;
        this.doctors.push(...res.results);
 
        event?.target.complete();
        if (event) {
          event.target.disabled = res.total_pages === this.currentPage;
        }
      },
      (err) => {
        console.log(err);
        loading.dismiss();
      }
    );
   
  }

  // doctor_profile() {
  //   this.route.navigate(['./doctor-profile']);
  // }
	

  doctor_profile(params: any) {
    console.log(params);
   
    // this.route.navigate(['./student-profile'], params);
    let navigationExtras: NavigationExtras = {
      state: {
            // student: JSON.stringify(params)
            doctor: params
          }
        };
        this.route.navigate(['./doctor-profile'], navigationExtras);

  }
 search() {
    this.route.navigate(['./specilities']);
  }
 list_of_doctors() {
    this.route.navigate(['./list-of-doctors']);
  }
 set_location() {
    this.route.navigate(['./add-address']);
  } 	
}
