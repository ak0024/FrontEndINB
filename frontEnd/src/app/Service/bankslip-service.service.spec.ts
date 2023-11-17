import { TestBed } from '@angular/core/testing';

import { BankslipServiceService } from './bankslip-service.service';

describe('BankslipServiceService', () => {
  let service: BankslipServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankslipServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
