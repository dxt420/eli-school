import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrescriptionPage } from './prescription.page';

describe('PrescriptionPage', () => {
  let component: PrescriptionPage;
  let fixture: ComponentFixture<PrescriptionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrescriptionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrescriptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
