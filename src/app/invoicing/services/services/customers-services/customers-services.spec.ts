import { TestBed } from '@angular/core/testing';

import { CustomersServices } from './customers-services';

describe('CustomersServices', () => {
  let service: CustomersServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomersServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
