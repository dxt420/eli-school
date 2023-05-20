import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { ApiDjangoService } from 'src/services/api-django.service';

@Component({
  selector: 'app-appointment-detail',
  templateUrl: './appointment-detail.page.html',
  styleUrls: ['./appointment-detail.page.scss'],
})
export class AppointmentDetailPage implements OnInit {

  student: any;

  consultations = [];

  tests = [];

  orders = [];

  currentPage = 1;

  

  
  constructor(private route: ActivatedRoute, private router: Router,private djangoService: ApiDjangoService,private loadingCtrl: LoadingController) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        console.log('hi');
        this.student = this.router.getCurrentNavigation().extras.state.student;
        console.log(this.student);
      }
    });
  }

  // constructor(private route: ActivatedRoute,private router: Router) {

  //   this.route.queryParams.subscribe(params => {
  //     if (this.router.getCurrentNavigation().extras.state) {
  //       console.log('hi');
  //       console.log(this.student);
  //       this.student = this.router.getCurrentNavigation().extras.state.student;
  //       console.log(this.student);
  //     }
  //   });
  //  }

  ngOnInit() {
    this.loadData();
  }

  appointment_detail(params: any) {
    console.log(params);
   
    // this.route.navigate(['./student-profile'], params);
    let navigationExtras: NavigationExtras = {
      state: {
            // student: JSON.stringify(params)
            consultation: params
          }
        };
        this.router.navigate(['./appointment-detail'], navigationExtras);

  }
	
  async loadData(event?: InfiniteScrollCustomEvent) {
    const loading = await this.loadingCtrl.create({
      message: 'Loading..',
      spinner: 'bubbles',
    });
    await loading.present();

    // console.log(this.authService.getUsername());
    
    
 
    this.djangoService.getStudentConsultations(this.currentPage,this.student.id).subscribe(
      (res) => {
        loading.dismiss();
        console.log(res);
        // this.school[0] = res;
        // console.log('School Array : ',this.school[0]);
        this.consultations.push(...res.results);
 
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

    this.djangoService.getStudentTests(this.currentPage,this.student.id).subscribe(
      (res) => {
        loading.dismiss();
        console.log(res);
        // this.school[0] = res;
        // console.log('School Array : ',this.school[0]);
        this.tests.push(...res.results);
 
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


    this.djangoService.getStudentPrescriptions(this.currentPage,this.student.id).subscribe(
      (res) => {
        loading.dismiss();
        console.log(res);
        // this.school[0] = res;
        // console.log('School Array : ',this.school[0]);
        this.orders.push(...res.results);
 
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

 chat() {
    this.router.navigate(['./chat']);
  }  
 rateDoc() {
    this.router.navigate(['./add-feedback']);
  }  
 
}
