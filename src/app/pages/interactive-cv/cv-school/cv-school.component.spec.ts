import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CvSchoolComponent} from './cv-school.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {MatButtonModule, MatIconModule} from '@angular/material';

describe('CvSchoolComponent', () => {
  let component: CvSchoolComponent;
  let fixture: ComponentFixture<CvSchoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      declarations: [
        CvSchoolComponent
      ],
      imports: [
        MatIconModule,
        MatButtonModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
