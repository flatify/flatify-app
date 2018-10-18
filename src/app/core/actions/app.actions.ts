import { Action } from '@ngrx/store';
import { User } from '@flatify/core/models/user';

export enum AppActionTypes {
  SetUser = '[App] Set User',
  SetFlatId = '[App] Set Flat Id',
  SetFlat = '[App] Set FLat'
}

export class SetUser implements Action {
  readonly type = AppActionTypes.SetUser;

  constructor(public payload: User) {}
}

export class SetFlatId implements Action {
  readonly type = AppActionTypes.SetFlatId;

  constructor(public payload: { flatId: string; userId: string }) {}
}

export class SetFlat implements Action {
  readonly type = AppActionTypes.SetFlat;

  constructor(public payload: any) {}
}

export type AppActionsUnion = SetUser | SetFlatId | SetFlat;
