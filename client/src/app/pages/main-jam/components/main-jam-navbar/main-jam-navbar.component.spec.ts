import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainJamNavbarComponent } from './main-jam-navbar.component';

describe('MainJamNavbarComponent', () => {
  let component: MainJamNavbarComponent;
  let fixture: ComponentFixture<MainJamNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainJamNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainJamNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
