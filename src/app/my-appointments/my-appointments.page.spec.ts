import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyAppointmentsPage } from './my-appointments.page';

describe('MyAppointmentsPage', () => {
  let component: MyAppointmentsPage;
  let fixture: ComponentFixture<MyAppointmentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAppointmentsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyAppointmentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
