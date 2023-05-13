import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pill-reminders',
  templateUrl: './pill-reminders.page.html',
  styleUrls: ['./pill-reminders.page.scss'],
})
export class PillRemindersPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

 pill_reminder() {
    this.route.navigate(['./pill-reminder']);
  } 
}
