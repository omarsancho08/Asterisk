import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayAudioComponent } from './two-way-audio.component';

describe('TwoWayAudioComponent', () => {
  let component: TwoWayAudioComponent;
  let fixture: ComponentFixture<TwoWayAudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoWayAudioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoWayAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
