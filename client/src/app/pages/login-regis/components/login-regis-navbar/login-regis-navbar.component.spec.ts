import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRegisNavbarComponent } from './login-regis-navbar.component';

describe('LoginRegisNavbarComponent', () => {
  let component: LoginRegisNavbarComponent;
  let fixture: ComponentFixture<LoginRegisNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginRegisNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRegisNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
