import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CvSchoolComponent} from './cv-school.component';

describe('CvSchoolComponent', () => {
  let component: CvSchoolComponent;
  let fixture: ComponentFixture<CvSchoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CvSchoolComponent]
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
