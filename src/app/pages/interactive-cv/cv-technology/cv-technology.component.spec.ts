import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CvTechnologyComponent} from './cv-technology.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {MatChipList, MatChipsModule} from '@angular/material';

describe('CvTechnologyComponent', () => {
  let component: CvTechnologyComponent;
  let fixture: ComponentFixture<CvTechnologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CvTechnologyComponent,
        CUSTOM_ELEMENTS_SCHEMA
      ],
      imports: [
        MatChipsModule,
        MatChipList
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
