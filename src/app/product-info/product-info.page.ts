import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.page.html',
  styleUrls: ['./product-info.page.scss'],
})
export class ProductInfoPage implements OnInit {
   favorite_icon = false;
   tab: string = "about";	
	gaming: string = "1";
  constructor(private route: Router) { }

  ngOnInit() {
  }
toggleSaveIcon1() {
    this.favorite_icon = !this.favorite_icon;
  }
	
 cart() {
    this.route.navigate(['./my-cart']);
  } 
	
 seller_profile() {
    this.route.navigate(['./seller-profile']);
  }	
 product_reviews() {
    this.route.navigate(['./product-reviews']);
  }	
}
