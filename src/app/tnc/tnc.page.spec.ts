import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TncPage } from './tnc.page';

describe('TncPage', () => {
  let component: TncPage;
  let fixture: ComponentFixture<TncPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TncPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TncPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
