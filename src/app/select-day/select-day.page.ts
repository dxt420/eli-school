import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-select-day',
  templateUrl: './select-day.page.html',
  styleUrls: ['./select-day.page.scss'],
})
export class SelectDayPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
  dismiss(){
    this.modalController.dismiss();
  }
}
