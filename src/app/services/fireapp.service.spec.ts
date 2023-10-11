import { TestBed } from '@angular/core/testing';

import { FireappService } from './fireapp.service';

describe('FireappService', () => {
  let service: FireappService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FireappService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
