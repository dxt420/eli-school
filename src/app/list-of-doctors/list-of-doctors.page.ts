import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { FilterPage } from '../filter/filter.page';  
@Component({
  selector: 'app-list-of-doctors',
  templateUrl: './list-of-doctors.page.html',
  styleUrls: ['./list-of-doctors.page.scss'],
})
export class ListOfDoctorsPage implements OnInit {

  constructor(private route: Router, private modalController: ModalController) { }

  ngOnInit() {
  }
 map() {
    this.route.navigate(['./map-view']);
  }  
 doctor_profile() {
    this.route.navigate(['./doctor-profile']);
  }
 book() {
    this.route.navigate(['./appointment-book']);
  }
 filter(){
    this.modalController.create({component:FilterPage}).then((modalElement)=>
    {
      modalElement.present();
    }
    )
  } 

}
