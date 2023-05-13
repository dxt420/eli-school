import { Component, OnInit } from '@angular/core';
import { TitlePage } from '../title/title.page';  
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.page.html',
  styleUrls: ['./add-address.page.scss'],
})
export class AddAddressPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
	
  title(){
    this.modalController.create({component:TitlePage}).then((modalElement)=>
    {
      modalElement.present();
    }
    )
  } 
}
