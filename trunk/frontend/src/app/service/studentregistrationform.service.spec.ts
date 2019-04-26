import { TestBed, inject } from '@angular/core/testing';

import { StudentregistrationformService } from './studentregistrationform.service';

describe('StudentregistrationformService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentregistrationformService]
    });
  });

  it('should be created', inject([StudentregistrationformService], (service: StudentregistrationformService) => {
    expect(service).toBeTruthy();
  }));
});
