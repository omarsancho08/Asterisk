import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinPromtComponent } from './pin-promt.component';

describe('PinPromtComponent', () => {
  let component: PinPromtComponent;
  let fixture: ComponentFixture<PinPromtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinPromtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PinPromtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
