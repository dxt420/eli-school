import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hospital-map-view',
  templateUrl: './hospital-map-view.page.html',
  styleUrls: ['./hospital-map-view.page.scss'],
})
export class HospitalMapViewPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
	
 hospital_info() {
    this.route.navigate(['./hospital-info']);
  }  
}
