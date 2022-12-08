import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopToolsComponent } from './top-tools.component';

describe('TopToolsComponent', () => {
  let component: TopToolsComponent;
  let fixture: ComponentFixture<TopToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopToolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
