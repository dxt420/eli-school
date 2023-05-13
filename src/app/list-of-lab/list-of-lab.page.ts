import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-list-of-lab',
  templateUrl: './list-of-lab.page.html',
  styleUrls: ['./list-of-lab.page.scss'],
})
export class ListOfLabPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  lab_info() {
    this.route.navigate(['./lab-info']);
  }
  lab_map_view() {
    this.route.navigate(['./lab-map-view']);
  }
}
