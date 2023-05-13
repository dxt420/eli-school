import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-order-placed',
  templateUrl: './order-placed.page.html',
  styleUrls: ['./order-placed.page.scss'],
})
export class OrderPlacedPage implements OnInit {

  constructor(private navCtrl: NavController, private route: Router) { }

  ngOnInit() {
  }
	
 continue_shopping() {
    this.navCtrl.navigateRoot(['./tabs']);
  } 
  
 orders() {
    this.route.navigate(['./orders']);
  }  
}
