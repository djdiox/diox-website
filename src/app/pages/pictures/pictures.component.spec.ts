import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicturesComponent } from './pictures.component';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';

describe('PicturesComponent', () => {
  let component: PicturesComponent;
  let fixture: ComponentFixture<PicturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PicturesComponent],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
