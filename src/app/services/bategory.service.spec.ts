import { TestBed } from '@angular/core/testing';

import { BategoryService } from './bategory.service';

describe('BategoryService', () => {
  let service: BategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
