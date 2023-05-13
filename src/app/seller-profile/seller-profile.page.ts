import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-profile',
  templateUrl: './seller-profile.page.html',
  styleUrls: ['./seller-profile.page.scss'],
})
export class SellerProfilePage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
 cart() {
    this.route.navigate(['./my-cart']);
  } 
  item_info() {
    this.route.navigate(['./product-info']);
  }   
}
