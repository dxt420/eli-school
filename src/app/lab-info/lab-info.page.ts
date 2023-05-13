import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lab-info',
  templateUrl: './lab-info.page.html',
  styleUrls: ['./lab-info.page.scss'],
})
export class LabInfoPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  select_test() {
    this.route.navigate(['./select-test']);
  }
}
