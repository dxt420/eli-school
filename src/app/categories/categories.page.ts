import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  tab: string = "otc";
  constructor(private route: Router) { }

  ngOnInit() {
  }
	
// cart() {
//    this.route.navigate(['./my-cart']);
//  } 
 product_list() {
    this.route.navigate(['./product-list']);
  }  

}
