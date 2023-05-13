import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { LoadingController, InfiniteScrollCustomEvent } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ApiDjangoService } from 'src/services/api-django.service';
import { AuthenticationService } from 'src/services/authentication.service';

@Component({
  selector: 'app-my-appointments',
  templateUrl: './my-appointments.page.html',
  styleUrls: ['./my-appointments.page.scss'],
})
export class MyAppointmentsPage implements OnInit {

  data = [];
  school = [];
  students= [];
  consultations = [];
  currentPage = 1;

  myVariable: any;

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


    this.djangoService.getSchoolConsultations(this.currentPage,this.authService.getUsername()).subscribe(
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


 


    // this.getData();
  }

//   getValueFromObservable():Observable<string> {
//     return this.store.map(res => res.json());
// }

  getDjangoFullObjectById(id: any,url: any) {
    
    // const loading = await this.loadingCtrl.create({
    //   message: 'Loading..',
    //   spinner: 'bubbles',
    // });
    // await loading.present();
   
    // this.djangoService.getDjangoFullObjectById(id,url).subscribe(
    //   (res) => {
    //     // loading.dismiss();
    //     console.log(res);
    //     this.myVariable = res;

    //     return res;
    //     // this.school[0] = res;
    //     // console.log('School Array : ',this.school[0]);
        
 
      
    //   },
    //   (err) => {
    //     console.log(err);
    //     // loading.dismiss();
    //   }
    // );



    // return this.myVariable;
  }



 
 
  loadMore(event: InfiniteScrollCustomEvent) {
    this.currentPage++;
    this.loadData(event);
  }
//  appointment_detail() {
//     this.route.navigate(['./appointment-detail']);
//   } 


  appointment_detail(params: any) {
    console.log(params);
   
    // this.route.navigate(['./student-profile'], params);
    let navigationExtras: NavigationExtras = {
      state: {
            // student: JSON.stringify(params)
            consultation: params
          }
        };
        this.route.navigate(['./appointment-detail'], navigationExtras);

  }
 chat() {
    this.route.navigate(['./chat']);
  } 
  add_feedback() {
    this.route.navigate(['./add-feedback']);
  } 
  appointment_book() {
    this.route.navigate(['./appointment-book']);
  } 

  more() {
    this.route.navigate(['./tabs/more']);
  }
}
