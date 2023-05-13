import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

 dismiss(){
   this.modalController.dismiss();
 }
}
