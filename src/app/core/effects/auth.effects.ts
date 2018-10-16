import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthActions } from '@flatify/core/actions';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { auth } from 'firebase/app';
import { fromPromise } from 'rxjs/internal-compatibility';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';


@Injectable()
export class AuthEffects {

  @Effect()
  login$ = this.actions$.pipe(
    ofType(AuthActions.AuthActionTypes.StartLogin),
    switchMap(() => fromPromise(this.fireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()))),
    tap(console.log),
    map(res => {
      return {
        uid: res.user.uid,
        email: res.user.email,
        name: res.user.displayName,
        photoURL: res.user.photoURL
      };
    }),
    map(data => new AuthActions.LoginSuccess({ data })),
    catchError(error => of(new AuthActions.LoginFail({ error })))
  );

  @Effect({ dispatch: false })
  loggedInRedirect$ = this.actions$.pipe(
    ofType(AuthActions.AuthActionTypes.LoginSuccess),
    tap(() => this.dialog.closeAll()),
    tap(() => this.router.navigateByUrl('/app'))
  );

  @Effect()
  logout$ = this.actions$.pipe(
    ofType(AuthActions.AuthActionTypes.StartLogout),
    switchMap(() => fromPromise(this.fireAuth.auth.signOut())),
    map(() => new AuthActions.LogoutDone())
  );

  @Effect({ dispatch: false })
  loggedOutRedirect$ = this.actions$.pipe(
    ofType(AuthActions.AuthActionTypes.LogoutDone),
    tap(() => this.dialog.closeAll()),
    tap(() => this.router.navigateByUrl('/'))
  );

  constructor(private actions$: Actions, private fireAuth: AngularFireAuth, private router: Router, private dialog: MatDialog) {
  }
}
