import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonSlides } from '@ionic/angular'; 
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';

@Component({
  selector: 'app-hospital-info',
  templateUrl: './hospital-info.page.html',
  styleUrls: ['./hospital-info.page.scss'],
})
export class HospitalInfoPage implements OnInit {
   favorite_icon = false;
    segment = 0;   
    pharmacy: any;


   



  constructor(private router: ActivatedRoute, private route: Router,private statusBar: StatusBar) {
    this.router.queryParams.subscribe(params => {
      if (this.route.getCurrentNavigation().extras.state) {
        console.log('hi');
        console.log(this.route.getCurrentNavigation().extras.state.pharmacy);
        this.pharmacy = this.route.getCurrentNavigation().extras.state.pharmacy;
        console.log(this.pharmacy);
      }
    });
  }

  ngOnInit() {
    this.statusBar.overlaysWebView(true);
    this.statusBar.backgroundColorByHexString('rgba(0, 0, 0, 0)');
  }
  

    
 toggleSaveIcon1() {
    this.favorite_icon = !this.favorite_icon;
  }

 doctor_profile() {
    this.route.navigate(['./doctor-profile']);
  }
}
