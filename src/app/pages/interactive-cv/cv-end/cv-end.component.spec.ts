import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CvEndComponent} from './cv-end.component';

describe('CvEndComponent', () => {
  let component: CvEndComponent;
  let fixture: ComponentFixture<CvEndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CvEndComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
