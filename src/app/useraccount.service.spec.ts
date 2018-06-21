import { TestBed, inject } from '@angular/core/testing';

import { UseraccountService } from './useraccount.service';

describe('UseraccountService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UseraccountService]
    });
  });

  it('should be created', inject([UseraccountService], (service: UseraccountService) => {
    expect(service).toBeTruthy();
  }));
});
