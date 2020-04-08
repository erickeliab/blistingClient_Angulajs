import { TestBed } from '@angular/core/testing';

import { BusinessServiceService } from './business-service.service';

describe('BusinessServiceService', () => {
  let service: BusinessServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusinessServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
