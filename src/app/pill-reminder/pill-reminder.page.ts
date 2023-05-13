import { Component, OnInit, ViewChild } from '@angular/core'; 
import { SelectDayPage } from '../select-day/select-day.page';  
import { ModalController } from '@ionic/angular';
import { IonDatetime } from '@ionic/angular';
import { format, parseISO } from 'date-fns'

@Component({
  selector: 'app-pill-reminder',
  templateUrl: './pill-reminder.page.html',
  styleUrls: ['./pill-reminder.page.scss'],
})
export class PillReminderPage implements OnInit {
  selectTimeA = '';
  selectTimeB = '';
  modes = ['date-time'];
  showPicker = false;
  dateValue = format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z';
  @ViewChild(IonDatetime) datetime: IonDatetime;
  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  select_day(){
    this.modalController.create({component:SelectDayPage}).then((modalElement)=>
    {
      modalElement.present();
    }
    )
  } 

  close() {
    this.datetime.cancel(true);
  }
  select() {
    this.datetime.confirm(true);
  }

  timeChanged1(value) {
    this.dateValue = value;
    this.selectTimeA = format(parseISO(value), 'HH:mm a');
  }
  timeChanged2(value) {
    this.dateValue = value;
    this.selectTimeB = format(parseISO(value), 'HH:mm a');
  }
}
