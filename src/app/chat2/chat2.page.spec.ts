import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Chat2Page } from './chat2.page';

describe('Chat2Page', () => {
  let component: Chat2Page;
  let fixture: ComponentFixture<Chat2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chat2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Chat2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
