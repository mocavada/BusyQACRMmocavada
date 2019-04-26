/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TestAuthService } from './test-auth.service';

describe('Service: TestAuth', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestAuthService]
    });
  });

  it('should ...', inject([TestAuthService], (service: TestAuthService) => {
    expect(service).toBeTruthy();
  }));
});
