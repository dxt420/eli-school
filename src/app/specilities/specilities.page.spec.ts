import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpecilitiesPage } from './specilities.page';

describe('SpecilitiesPage', () => {
  let component: SpecilitiesPage;
  let fixture: ComponentFixture<SpecilitiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecilitiesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpecilitiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
