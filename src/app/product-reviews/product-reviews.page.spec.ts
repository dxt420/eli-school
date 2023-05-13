import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductReviewsPage } from './product-reviews.page';

describe('ProductReviewsPage', () => {
  let component: ProductReviewsPage;
  let fixture: ComponentFixture<ProductReviewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductReviewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductReviewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
