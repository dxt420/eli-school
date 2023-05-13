import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-buyappalert',
  templateUrl: './buyappalert.page.html',
  styleUrls: ['./buyappalert.page.scss']
})
export class BuyappalertPage implements OnInit {

  constructor(private modalController: ModalController, private http: HttpClient) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss();
  }

  buyAppAction() {
    this.modalController.dismiss();
    window.open("https://dashboard.vtlabs.dev/projects/envato-referral-buy-link?project_slug=doctopro_ionic", '_system', 'location=no');
  }

  navWhatsapp() {
    let projectName = "doctoPro";
    this.http.get<any>("https://dashboard.vtlabs.dev/whatsapp.php?product_name=" + projectName + "&source=ionic_template", {
      headers: new HttpHeaders({ 'Accept': 'application/json', 'Content-Type': 'application/json' })
    }).subscribe(res => {
      window.open(res['link'], '_system', 'location=no');
    }, err => { });

    this.dismiss();
  }

}
