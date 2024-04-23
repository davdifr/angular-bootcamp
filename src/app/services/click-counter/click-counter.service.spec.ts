import { TestBed } from '@angular/core/testing';

import { ClickCounterService } from './click-counter.service';

describe('ClickCounterService', () => {
  let service: ClickCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClickCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
