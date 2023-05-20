import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, InfiniteScrollCustomEvent } from '@ionic/angular';
import { ApiDjangoService } from 'src/services/api-django.service';
import { AuthenticationService } from 'src/services/authentication.service';

@Component({
  selector: 'app-my-lab-tests',
  templateUrl: './my-lab-tests.page.html',
  styleUrls: ['./my-lab-tests.page.scss'],
})
export class MyLabTestsPage implements OnInit {

  data = [];
  school = [];
  students= [];
  orders = [];
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
  
  
      this.djangoService.getSchoolPrescriptions(this.currentPage,this.authService.getUsername()).subscribe(
        (res) => {
          loading.dismiss();
          console.log(res);
      
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
  
  
   
  
  
      // this.getData();
    }


  more() {
    this.route.navigate(['./tabs/more']);
  }

}
