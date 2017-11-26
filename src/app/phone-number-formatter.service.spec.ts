import { TestBed, inject } from '@angular/core/testing';

import { PhoneNumberFormatterService } from './phone-number-formatter.service';

describe('PhoneNumberFormatterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhoneNumberFormatterService]
    });
  });

  it('should be created', inject([PhoneNumberFormatterService], (service: PhoneNumberFormatterService) => {
    expect(service).toBeTruthy();
  }));
});
