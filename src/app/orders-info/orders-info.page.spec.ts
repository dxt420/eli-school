import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrdersInfoPage } from './orders-info.page';

describe('OrdersInfoPage', () => {
  let component: OrdersInfoPage;
  let fixture: ComponentFixture<OrdersInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrdersInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
