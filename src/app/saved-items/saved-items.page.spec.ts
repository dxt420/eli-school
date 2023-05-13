import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SavedItemsPage } from './saved-items.page';

describe('SavedItemsPage', () => {
  let component: SavedItemsPage;
  let fixture: ComponentFixture<SavedItemsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedItemsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SavedItemsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
