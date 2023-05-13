import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrescriptionPage } from '../prescription/prescription.page';  
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-orders-info',
  templateUrl: './orders-info.page.html',
  styleUrls: ['./orders-info.page.scss'],
})
export class OrdersInfoPage implements OnInit {

  constructor(private route: Router, private modalController: ModalController) { }

  ngOnInit() {
  }

TrackOrder() {
    this.route.navigate(['./order-tracking']);
  }
 prescription(){
    this.modalController.create({component:PrescriptionPage}).then((modalElement)=>
    {
      modalElement.present();
    }
    )
  }     
}
