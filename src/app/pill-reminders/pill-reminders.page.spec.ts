import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PillRemindersPage } from './pill-reminders.page';

describe('PillRemindersPage', () => {
  let component: PillRemindersPage;
  let fixture: ComponentFixture<PillRemindersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PillRemindersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PillRemindersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
