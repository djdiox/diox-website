import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {InteractiveCvComponent} from './interactive-cv.component';
import {MatButtonModule, MatChipList, MatChipsModule, MatProgressBarModule, MatTooltipModule} from '@angular/material';

describe('InteractiveCvComponent', () => {
  let component: InteractiveCvComponent;
  let fixture: ComponentFixture<InteractiveCvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InteractiveCvComponent],
      imports: [
        MatButtonModule,
        MatTooltipModule,
        MatProgressBarModule,
        MatChipsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractiveCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
