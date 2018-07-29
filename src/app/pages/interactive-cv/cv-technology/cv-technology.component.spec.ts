import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CvTechnologyComponent} from './cv-technology.component';

describe('CvTechnologyComponent', () => {
  let component: CvTechnologyComponent;
  let fixture: ComponentFixture<CvTechnologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CvTechnologyComponent]
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
