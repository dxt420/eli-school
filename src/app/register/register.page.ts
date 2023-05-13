import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private navCtrl: NavController, private route: Router) { }

  ngOnInit() {
  }


 sign_in() {
    this.navCtrl.navigateRoot(['./sign-in']);
  } 
 continue() {
    this.route.navigate(['./verification']);
  } 

}
 