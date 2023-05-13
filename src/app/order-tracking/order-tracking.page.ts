import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-tracking',
  templateUrl: './order-tracking.page.html',
  styleUrls: ['./order-tracking.page.scss'],
})
export class OrderTrackingPage implements OnInit {

  constructor(private route: Router ) { }

  ngOnInit() {
  }


 chat() {
    this.route.navigate(['./chat2']);
  }  
   
}
