import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';  
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.page.html',
  styleUrls: ['./doctor-profile.page.scss'],
})
export class DoctorProfilePage implements OnInit {
   favorite_icon = false; 		
   doctor: any;
  // constructor(private route: Router,  private statusBar: StatusBar) { }

  constructor(private route: ActivatedRoute, private router: Router,private statusBar: StatusBar) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        console.log('hi');
        this.doctor = this.router.getCurrentNavigation().extras.state.doctor;
        console.log(this.doctor);
      }
    });
  }

  ngOnInit() {
    this.statusBar.overlaysWebView(false);
    this.statusBar.backgroundColorByHexString('#ffffff');
  }

toggleSaveIcon1() {
    this.favorite_icon = !this.favorite_icon;
  }
	
 book_appointment_now(params: any) {
  console.log(params);
   
  // this.route.navigate(['./student-profile'], params);
  let navigationExtras: NavigationExtras = {
    state: {
          // student: JSON.stringify(params)
          doctor: params
        }
      };
      // this.route.navigate(['./doctor-profile'], navigationExtras);
    this.router.navigate(['./appointment-book'], navigationExtras);
  }
 doctor_reviews() {
    this.router.navigate(['./doctor-reviews']);
  }
 
 

}
