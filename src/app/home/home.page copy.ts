import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiDjangoService } from 'src/services/api-django.service';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';

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
    private loadingCtrl: LoadingController
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
 
    this.djangoService.getSchoolInfo(this.currentPage,'omonaderrick25@gmail.com').subscribe(
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

    this.djangoService.getStudents(this.currentPage).subscribe(
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
  student_profile() {
    this.route.navigate(['./student-profile']);
  }
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
