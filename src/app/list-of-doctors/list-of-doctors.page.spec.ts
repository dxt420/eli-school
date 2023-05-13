import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListOfDoctorsPage } from './list-of-doctors.page';

describe('ListOfDoctorsPage', () => {
  let component: ListOfDoctorsPage;
  let fixture: ComponentFixture<ListOfDoctorsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfDoctorsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListOfDoctorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
