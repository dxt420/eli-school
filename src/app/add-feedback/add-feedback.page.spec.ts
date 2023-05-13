import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddFeedbackPage } from './add-feedback.page';

describe('AddFeedbackPage', () => {
  let component: AddFeedbackPage;
  let fixture: ComponentFixture<AddFeedbackPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFeedbackPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddFeedbackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
