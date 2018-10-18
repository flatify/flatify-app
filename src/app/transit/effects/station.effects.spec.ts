import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { StationEffects } from './station.effects';

describe('StationEffects', () => {
  let actions$: Observable<any>;
  let effects: StationEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StationEffects, provideMockActions(() => actions$)]
    });

    effects = TestBed.get(StationEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
