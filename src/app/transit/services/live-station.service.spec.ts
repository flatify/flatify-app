import { TestBed } from '@angular/core/testing';

import { LiveStationService } from './live-station.service';

describe('LiveStationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LiveStationService = TestBed.get(LiveStationService);
    expect(service).toBeTruthy();
  });
});
