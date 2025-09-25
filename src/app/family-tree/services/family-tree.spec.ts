import { TestBed } from '@angular/core/testing';

import { FamilyTree } from './family-tree';

describe('FamilyTree', () => {
  let service: FamilyTree;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FamilyTree);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
