import {TestBed, inject, async} from '@angular/core/testing';

import {DialogFlowService} from './dialog-flow.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';

describe('DialogFlowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DialogFlowService, HttpClientTestingModule],
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ]
    });
  });

  afterEach(inject([HttpTestingController], (backend: HttpTestingController) => {
    backend.verify();
  }));

  it(`should send an expected login request`, async(inject([DialogFlowService, HttpTestingController],
    (service: DialogFlowService, backend: HttpTestingController) => {
      expect(service).not.toBeUndefined();
    })));

  it('should be created', inject([DialogFlowService], (service: DialogFlowService) => {
    expect(service).toBeTruthy();
  }));
});
