import { TestBed } from '@angular/core/testing';

import { GrudService } from './grud.service';

describe('GrudService', () => {
  let service: GrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
