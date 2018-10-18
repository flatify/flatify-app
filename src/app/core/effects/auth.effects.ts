import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AngularFireAuth } from '@angular/fire/auth';
import { AppActions, AuthActions } from '@flatify/core/actions';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { auth } from 'firebase/app';
import { fromPromise } from 'rxjs/internal-compatibility';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AngularFirestore } from '@angular/fire/firestore';
import { processFirestoreDoc } from '@flatify/shared/helpers/processFirestoreSnapshots';

@Injectable()
export class AuthEffects {
  @Effect()
  login$ = this.actions$.pipe(
    ofType(AuthActions.AuthActionTypes.StartLogin),
    switchMap(() =>
      fromPromise(
        this.fireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      )
    ),
    tap(console.log),
    map(res => {
      return {
        uid: res.user.uid,
        email: res.user.email,
        name: res.user.displayName,
        photoURL: res.user.photoURL
      };
    }),
    map(data => new AuthActions.LoginSuccess(data)),
    catchError(error => of(new AuthActions.LoginFail({ error })))
  );

  @Effect({ dispatch: false })
  loggedInActions$ = this.actions$.pipe(
    ofType(AuthActions.AuthActionTypes.LoginSuccess),
    tap(() => this.dialog.closeAll())
    // tap(() => this.router.navigateByUrl('/app'))
  );

  @Effect()
  logout$ = this.actions$.pipe(
    ofType(AuthActions.AuthActionTypes.StartLogout),
    switchMap(() => fromPromise(this.fireAuth.auth.signOut())),
    map(() => new AuthActions.LogoutDone())
  );

  @Effect({ dispatch: false })
  loggedOutActions$ = this.actions$.pipe(
    ofType(AuthActions.AuthActionTypes.LogoutDone),
    tap(() => this.dialog.closeAll()),
    tap(() => this.router.navigateByUrl('/'))
  );

  @Effect()
  fetchUser$ = this.actions$.pipe(
    ofType<AuthActions.LoginSuccess>(AuthActions.AuthActionTypes.LoginSuccess),
    switchMap(({ payload }) =>
      this.db
        .collection('users')
        .doc(payload.uid)
        .snapshotChanges()
        .pipe(processFirestoreDoc)
    ),
    map(user => new AppActions.SetUser(user))
  );

  constructor(
    private actions$: Actions,
    private fireAuth: AngularFireAuth,
    private router: Router,
    private dialog: MatDialog,
    private db: AngularFirestore
  ) {}
}
