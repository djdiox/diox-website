import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CvProgrammingComponent} from './cv-programming.component';

describe('CvProgrammingComponent', () => {
  let component: CvProgrammingComponent;
  let fixture: ComponentFixture<CvProgrammingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CvProgrammingComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvProgrammingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
