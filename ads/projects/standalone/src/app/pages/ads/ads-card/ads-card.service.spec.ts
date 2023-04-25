import { TestBed } from '@angular/core/testing';

import { AdsCardService } from './ads-card.service';

describe('AdsCardService', () => {
  let service: AdsCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdsCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
