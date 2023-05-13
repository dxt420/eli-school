import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectPaymetMethodPage } from './select-paymet-method.page';

describe('SelectPaymetMethodPage', () => {
  let component: SelectPaymetMethodPage;
  let fixture: ComponentFixture<SelectPaymetMethodPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectPaymetMethodPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectPaymetMethodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
