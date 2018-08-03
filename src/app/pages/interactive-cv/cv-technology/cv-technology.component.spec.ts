import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CvTechnologyComponent} from './cv-technology.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {MatChipsModule, MatIconModule, MatInputModule, MatListModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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
        MatIconModule,
        MatInputModule,
        BrowserAnimationsModule,
        FormsModule
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
