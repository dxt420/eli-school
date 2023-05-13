import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.page.html',
  styleUrls: ['./map-view.page.scss'],
})
export class MapViewPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
	
 doctor_profile() {
    this.route.navigate(['./doctor-profile']);
  }

}
