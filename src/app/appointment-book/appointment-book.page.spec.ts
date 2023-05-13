import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppointmentBookPage } from './appointment-book.page';

describe('AppointmentBookPage', () => {
  let component: AppointmentBookPage;
  let fixture: ComponentFixture<AppointmentBookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentBookPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppointmentBookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
