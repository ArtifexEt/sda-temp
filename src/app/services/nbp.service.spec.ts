import { TestBed } from '@angular/core/testing';

import { NBPService } from './nbp.service';

describe('NBPService', () => {
  let service: NBPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NBPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
