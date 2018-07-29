import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CvGoalsComponent} from './cv-goals.component';

describe('CvGoalsComponent', () => {
  let component: CvGoalsComponent;
  let fixture: ComponentFixture<CvGoalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CvGoalsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
