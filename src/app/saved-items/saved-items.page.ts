import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
@Component({
  selector: 'app-saved-items',
  templateUrl: './saved-items.page.html',
  styleUrls: ['./saved-items.page.scss'],
})
export class SavedItemsPage implements OnInit {
segment = 0;   
 @ViewChild('slides', { static: true }) slider: IonSlides;   	
  constructor(private route: Router) { }

  ngOnInit() {
  }

  async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }  
 item_info() {
    this.route.navigate(['./product-info']);
  } 
 doctor_profile() {
    this.route.navigate(['./doctor-profile']);
  }
book() {
    this.route.navigate(['./appointment-book']);
  }
 hospital_info() {
    this.route.navigate(['./hospital-info']);
  }
}
