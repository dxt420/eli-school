import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrescriptionPage } from '../prescription/prescription.page';  
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.page.html',
  styleUrls: ['./my-cart.page.scss'],
})
export class MyCartPage implements OnInit {
fabAction = false;
  constructor(private route: Router,private modalController: ModalController) { }

  ngOnInit() {
  }
	

toggleFab(){
      this.fabAction = !this.fabAction;
   }	
 confirm_order() {
    this.route.navigate(['./confirm-order']);
  } 
 offers() {
    this.route.navigate(['./offers']);
  } 
 prescription(){
    this.modalController.create({component:PrescriptionPage}).then((modalElement)=>
    {
      modalElement.present();
    }
    )
  } 
}
 