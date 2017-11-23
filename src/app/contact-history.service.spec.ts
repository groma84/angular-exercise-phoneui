import { TestBed, inject } from '@angular/core/testing';

import { ContactHistoryService } from './contact-history.service';

describe('ContactHistoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactHistoryService]
    });
  });

  it('should be created', inject([ContactHistoryService], (service: ContactHistoryService) => {
    expect(service).toBeTruthy();
  }));
});
