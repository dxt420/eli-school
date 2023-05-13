import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.page.html',
  styleUrls: ['./doctor-profile.page.scss'],
})
export class DoctorProfilePage implements OnInit {
   favorite_icon = false; 		
  constructor(private route: Router,  private statusBar: StatusBar) { }

  ngOnInit() {
    this.statusBar.overlaysWebView(false);
    this.statusBar.backgroundColorByHexString('#ffffff');
  }

toggleSaveIcon1() {
    this.favorite_icon = !this.favorite_icon;
  }
	
 book_appointment_now() {
    this.route.navigate(['./appointment-book']);
  }
 doctor_reviews() {
    this.route.navigate(['./doctor-reviews']);
  }
 
 

}
