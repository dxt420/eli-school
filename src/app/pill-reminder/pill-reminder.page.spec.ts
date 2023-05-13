import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PillReminderPage } from './pill-reminder.page';

describe('PillReminderPage', () => {
  let component: PillReminderPage;
  let fixture: ComponentFixture<PillReminderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PillReminderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PillReminderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
