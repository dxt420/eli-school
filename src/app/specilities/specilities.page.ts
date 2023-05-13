import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-specilities',
  templateUrl: './specilities.page.html',
  styleUrls: ['./specilities.page.scss'],
})
export class SpecilitiesPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

 list_of_doctors() {
    this.route.navigate(['./list-of-doctors']);
  }
}
