import {TestBed, inject} from '@angular/core/testing';

import {DialogFlowService} from './dialog-flow.service';
import {HttpClientTestingBackend} from '@angular/common/http/testing/src/backend';

describe('DialogFlowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DialogFlowService, HttpClientTestingBackend]
    });
  });

  it('should be created', inject([DialogFlowService], (service: DialogFlowService) => {
    expect(service).toBeTruthy();
  }));
});
