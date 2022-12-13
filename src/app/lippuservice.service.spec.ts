import { TestBed } from '@angular/core/testing';

import { LippuserviceService } from './lippuservice.service';

describe('LippuserviceService', () => {
  let service: LippuserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LippuserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
