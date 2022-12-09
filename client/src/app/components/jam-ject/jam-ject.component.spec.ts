import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JamJectComponent } from './jam-ject.component';

describe('JamJectComponent', () => {
  let component: JamJectComponent;
  let fixture: ComponentFixture<JamJectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JamJectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JamJectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
