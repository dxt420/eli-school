import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment-booked',
  templateUrl: './appointment-booked.page.html',
  styleUrls: ['./appointment-booked.page.scss'],
})
export class AppointmentBookedPage implements OnInit {

  constructor(private navCtrl: NavController, private route: Router) { }

  ngOnInit() {
  }

 
  navMyAppointments() {
    this.route.navigate(['./my-appointments']);
  } 
}
