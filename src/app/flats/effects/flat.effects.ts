import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { FlatActions } from '@flatify/flats/actions';
import { AngularFirestore } from '@angular/fire/firestore';
import { map, switchMap } from 'rxjs/operators';
import { processFirestoreCollection } from '@flatify/shared/herlpers/processFirestoreSnapshots';

@Injectable()
export class FlatEffects {
  @Effect()
  loadFlats$ = this.actions$.pipe(
    ofType(FlatActions.FlatActionTypes.LoadFlatsStart),
    switchMap(() =>
      this.db
        .collection('flats')
        .snapshotChanges()
        .pipe(processFirestoreCollection)
    ),
    map(flats => new FlatActions.LoadFlatsSuccess({ flats }))
  );

  constructor(private actions$: Actions, private db: AngularFirestore) {
  }
}
