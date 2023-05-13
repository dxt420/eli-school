import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrescriptionPage } from '../prescription/prescription.page';  
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.page.html',
  styleUrls: ['./confirm-order.page.scss'],
})
export class ConfirmOrderPage implements OnInit {

  constructor(private route: Router, private modalController: ModalController) { }

  ngOnInit() {
  }

 addresses() {
    this.route.navigate(['./addresses']);
  } 
 select_paymet_method() {
    this.route.navigate(['./select-paymet-method']);
  } 
 prescription(){
    this.modalController.create({component:PrescriptionPage}).then((modalElement)=>
    {
      modalElement.present();
    }
    )
  }     
}
