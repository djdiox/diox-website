import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CvStartComponent} from './cv-start.component';

describe('CvStartComponent', () => {
  let component: CvStartComponent;
  let fixture: ComponentFixture<CvStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CvStartComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
