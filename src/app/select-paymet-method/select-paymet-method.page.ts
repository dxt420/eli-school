import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-paymet-method',
  templateUrl: './select-paymet-method.page.html',
  styleUrls: ['./select-paymet-method.page.scss'],
})
export class SelectPaymetMethodPage implements OnInit {
 
  constructor(private route: Router) { }

  ngOnInit() {
  }
	
 order_placed() {
    this.route.navigate(['./order-placed']);
  } 
	
 
}
