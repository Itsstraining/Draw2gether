import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainJamComponent } from './main-jam.component';

describe('MainJamComponent', () => {
  let component: MainJamComponent;
  let fixture: ComponentFixture<MainJamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainJamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainJamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
