import { TestBed } from '@angular/core/testing';

import { FamilyTreeService } from './family-tree-services';

describe('FamilyTree', () => {
  let service: FamilyTreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FamilyTreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
