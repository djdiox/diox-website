import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetsComponent } from './sets.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('SetsComponent', () => {
  let component: SetsComponent;
  let fixture: ComponentFixture<SetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SetsComponent],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetsComponent);
    component = fixture.componentInstance;
    // component.tabs = ['test'];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
