import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DoctorReviewsPage } from './doctor-reviews.page';

describe('DoctorReviewsPage', () => {
  let component: DoctorReviewsPage;
  let fixture: ComponentFixture<DoctorReviewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorReviewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DoctorReviewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
