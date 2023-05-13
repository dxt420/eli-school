import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-test',
  templateUrl: './select-test.page.html',
  styleUrls: ['./select-test.page.scss'],
})
export class SelectTestPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  ConfirmTestBooking() {
      this.route.navigate(['./confirm-test-booking']);
    } 
}
