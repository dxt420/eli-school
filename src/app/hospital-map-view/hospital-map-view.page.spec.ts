import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HospitalMapViewPage } from './hospital-map-view.page';

describe('HospitalMapViewPage', () => {
  let component: HospitalMapViewPage;
  let fixture: ComponentFixture<HospitalMapViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalMapViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HospitalMapViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
