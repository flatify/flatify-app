import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { FlatActions } from '@flatify/core/actions';

@Injectable()
export class FlatEffects {
  @Effect({ dispatch: false })
  createFlat$ = this.actions$.pipe(
    ofType<FlatActions.CreateFlat>(FlatActions.FlatActionTypes.CreateFlat),
    map(({ payload }) =>
      this.db
        .collection('flats')
        .doc(payload.id)
        .set(payload.flat)
    )
  );

  constructor(private actions$: Actions, private db: AngularFirestore) {}
}
