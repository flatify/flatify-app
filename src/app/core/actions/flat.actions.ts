import { Action } from '@ngrx/store';

export enum FlatActionTypes {
  LoadFlat = '[Flat] Load Flat',
  CreateFlat = '[Flat] Create Flat',
  JoinFlat = '[Flat] Join Flat'
}

export class CreateFlat implements Action {
  readonly type = FlatActionTypes.CreateFlat;

  constructor(public payload: { flat: any; id: string }) {}
}

export class LoadFlat implements Action {
  readonly type = FlatActionTypes.LoadFlat;
}

export class JoinFlat implements Action {
  readonly type = FlatActionTypes.JoinFlat;

  constructor(public payload: string) {}
}

export type FlatActionsUnion = LoadFlat | CreateFlat | JoinFlat;
