import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ApiDjangoService } from 'src/services/api-django.service';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { AuthenticationService } from 'src/services/authentication.service';
// import { log } from 'console';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  data = [];
  school = [];
  students= [];
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

    console.log(this.authService.getUsername());
    
    
 
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

    this.djangoService.getStudents(this.currentPage,this.authService.getUsername()).subscribe(
      (res) => {
        loading.dismiss();
        console.log(res);
        // this.students = res;
        this.students.push(...res.results);
 
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
 
  loadMore(event: InfiniteScrollCustomEvent) {
    this.currentPage++;
    this.loadData(event);
  }
  student_profile(params: any) {
    console.log(params);
   
    // this.route.navigate(['./student-profile'], params);
    let navigationExtras: NavigationExtras = {
      state: {
            // student: JSON.stringify(params)
            student: params
          }
        };
        this.route.navigate(['student-profile'], navigationExtras);

  }

  // openDetailsWithQueryParams() {
  //   let navigationExtras: NavigationExtras = {
  //     queryParams: {
  //       special: JSON.stringify(this.user)
  //     }
  //   };
  //   this.router.navigate(['details'], navigationExtras);
  // }


 categories() {
    this.route.navigate(['./categories']);
  } 
 set_location() {
    this.route.navigate(['./add-address']);
  } 
 cart() {
    this.route.navigate(['./my-cart']);
  }  
 search() {
    this.route.navigate(['./specilities']);
  } 
 seller_profile() {
    this.route.navigate(['./seller-profile']);
  } 
  offers() {
    this.route.navigate(['./offers']);
  } 

}
