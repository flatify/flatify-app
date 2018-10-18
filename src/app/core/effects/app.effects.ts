import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AppActions } from '@flatify/core/actions';
import { filter, map, switchMap } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { processFirestoreDoc } from '@flatify/shared/helpers/processFirestoreSnapshots';

@Injectable()
export class AppEffects {
  @Effect()
  $loadFLat = this.actions$.pipe(
    ofType<AppActions.SetUser>(AppActions.AppActionTypes.SetUser),
    filter(({ payload }) => !!payload.flatId),
    switchMap(({ payload }) =>
      this.db
        .collection('flats')
        .doc(payload.flatId)
        .snapshotChanges()
        .pipe(processFirestoreDoc)
    ),
    map(flat => new AppActions.SetFlat(flat))
  );

  @Effect({ dispatch: false })
  $setFlatId = this.actions$.pipe(
    ofType<AppActions.SetFlatId>(AppActions.AppActionTypes.SetFlatId),
    map(({ payload }) =>
      this.db
        .collection('users')
        .doc(payload.userId)
        .update({ flatId: payload.flatId })
    )
  );

  constructor(private actions$: Actions, private db: AngularFirestore) {}
}
