import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrderTrackingPage } from './order-tracking.page';

describe('OrderTrackingPage', () => {
  let component: OrderTrackingPage;
  let fixture: ComponentFixture<OrderTrackingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderTrackingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderTrackingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
