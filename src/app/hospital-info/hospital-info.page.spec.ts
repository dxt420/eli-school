import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HospitalInfoPage } from './hospital-info.page';

describe('HospitalInfoPage', () => {
  let component: HospitalInfoPage;
  let fixture: ComponentFixture<HospitalInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HospitalInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
