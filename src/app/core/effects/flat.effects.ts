import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { FlatActions } from '@flatify/core/actions';
import { AngularFireFunctions } from '@angular/fire/functions';

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

  @Effect({ dispatch: false })
  joinFlat$ = this.actions$.pipe(
    ofType<FlatActions.JoinFlat>(FlatActions.FlatActionTypes.JoinFlat),
    switchMap(({ payload }) =>
      this.fireFunctions.httpsCallable('processInviteCode')({ code: payload })
    ),
    tap(console.log)
  );

  constructor(
    private actions$: Actions,
    private db: AngularFirestore,
    private fireFunctions: AngularFireFunctions
  ) {}
}
