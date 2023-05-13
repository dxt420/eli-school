import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignInPage } from './sign-in.page';

import { FormsModule } from '@angular/forms';

describe('SignInPage', () => {
  let component: SignInPage;
  let fixture: ComponentFixture<SignInPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInPage ],
      imports: [IonicModule.forRoot(),FormsModule ]
    }).compileComponents();

    fixture = TestBed.createComponent(SignInPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
