import {inject, TestBed} from '@angular/core/testing';

import {InteractiveCvService} from './interactive-cv.service';

describe('InteractiveCvService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InteractiveCvService]
    });
  });

  it('should be created', inject([InteractiveCvService], (service: InteractiveCvService) => {
    expect(service).toBeTruthy();
  }));
});
