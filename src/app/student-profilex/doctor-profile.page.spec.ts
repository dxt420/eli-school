import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DoctorProfilePage } from './doctor-profile.page';

describe('DoctorProfilePage', () => {
  let component: DoctorProfilePage;
  let fixture: ComponentFixture<DoctorProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DoctorProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
