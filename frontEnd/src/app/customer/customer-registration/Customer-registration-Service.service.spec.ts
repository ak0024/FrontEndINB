/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CustomerRegistrationServiceService } from './Customer-registration-Service.service';

describe('Service: CustomerRegistrationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerRegistrationServiceService]
    });
  });

  it('should ...', inject([CustomerRegistrationServiceService], (service: CustomerRegistrationServiceService) => {
    expect(service).toBeTruthy();
  }));
});
