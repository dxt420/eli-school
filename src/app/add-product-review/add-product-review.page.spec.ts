import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddProductReviewPage } from './add-product-review.page';

describe('AddProductReviewPage', () => {
  let component: AddProductReviewPage;
  let fixture: ComponentFixture<AddProductReviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductReviewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddProductReviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
