import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CvTechnologyComponent} from './cv-technology.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {MatChipsModule, MatIconModule, MatListModule} from '@angular/material';

describe('CvTechnologyComponent', () => {
  let component: CvTechnologyComponent;
  let fixture: ComponentFixture<CvTechnologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      declarations: [
        CvTechnologyComponent
      ],
      imports: [
        MatChipsModule,
        MatListModule,
        MatIconModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvTechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
