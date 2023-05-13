import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.page.html',
  styleUrls: ['./prescription.page.scss'],
})
export class PrescriptionPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  cancel(){
   this.modalController.dismiss();
 }

}
