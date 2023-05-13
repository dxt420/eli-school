import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, InfiniteScrollCustomEvent } from '@ionic/angular';
import { ApiDjangoService } from 'src/services/api-django.service';
import { AuthenticationService } from 'src/services/authentication.service';

@Component({
  selector: 'app-lab-test',
  templateUrl: './lab-test.page.html',
  styleUrls: ['./lab-test.page.scss'],
})
export class LabTestPage implements OnInit {

  data = [];
  school = [];
  students= [];
  currentPage = 1;
  
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

   
  }



  ngOnInit() {
    
    this.loadData();
  }


  search() {
    this.route.navigate(['./specilities']);
  }
  list_of_lab() {
    this.route.navigate(['./list-of-lab']);
  }
  set_location() {
    this.route.navigate(['./add-address']);
  }
}
