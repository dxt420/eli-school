import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SellerProfilePage } from './seller-profile.page';

describe('SellerProfilePage', () => {
  let component: SellerProfilePage;
  let fixture: ComponentFixture<SellerProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SellerProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
