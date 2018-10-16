import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { FlatEffects } from './flat.effects';

describe('FlatEffects', () => {
  let actions$: Observable<any>;
  let effects: FlatEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FlatEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(FlatEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
