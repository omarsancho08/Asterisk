import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminateCallComponent } from './terminate-call.component';

describe('TerminateCallComponent', () => {
  let component: TerminateCallComponent;
  let fixture: ComponentFixture<TerminateCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminateCallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminateCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
