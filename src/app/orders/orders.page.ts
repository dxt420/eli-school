import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

ordersInfo() {
    this.route.navigate(['./orders-info']);
  }
    
itemReview() {
    this.route.navigate(['./add-product-review']);
  }
}
