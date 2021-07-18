import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BNBTComponent } from './bnbt.component';

describe('BNBTComponent', () => {
  let component: BNBTComponent;
  let fixture: ComponentFixture<BNBTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BNBTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BNBTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
