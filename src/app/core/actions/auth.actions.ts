import { Action } from '@ngrx/store';
import { auth } from 'firebase/app';

export enum AuthActionTypes {
  StartLogin = '[Auth] Start Login',
  LoginSuccess = '[Auth] Login Success',
  LoginFail = '[Auth] Login Fail',
  StartLogout = '[Auth] Start Logout',
  LogoutDone = '[Auth] Logout Done'
}

export class StartLogin implements Action {
  readonly type = AuthActionTypes.StartLogin;
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccess;

  constructor(public payload: { data: object }) {}
}

export class LoginFail implements Action {
  readonly type = AuthActionTypes.LoginFail;

  constructor(public payload: { error: auth.Error }) {}
}

export class StartLogout implements Action {
  readonly type = AuthActionTypes.StartLogout;
}

export class LogoutDone implements Action {
  readonly type = AuthActionTypes.LogoutDone;
}

export type AuthActions =
  | StartLogin
  | LoginSuccess
  | LoginFail
  | StartLogout
  | LogoutDone;
