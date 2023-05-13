import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppointmentBookedPage } from './appointment-booked.page';

describe('AppointmentBookedPage', () => {
  let component: AppointmentBookedPage;
  let fixture: ComponentFixture<AppointmentBookedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentBookedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppointmentBookedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
