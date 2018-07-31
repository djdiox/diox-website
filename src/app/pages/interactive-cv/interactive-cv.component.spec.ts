import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {InteractiveCvComponent} from './interactive-cv.component';
import {
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatIconModule,
  MatListModule,
  MatProgressBarModule,
  MatTooltipModule
} from '@angular/material';
import {InteractiveCvService} from '../../services/interactive-cv.service';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('InteractiveCvComponent', () => {
  let component: InteractiveCvComponent;
  let fixture: ComponentFixture<InteractiveCvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({

      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      declarations: [InteractiveCvComponent],
      imports: [
        MatButtonModule,
        MatTooltipModule,
        MatProgressBarModule,
        MatChipsModule,
        MatListModule,
        MatIconModule,
        MatCardModule
      ],
      providers: [
        InteractiveCvService
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
