import { Action } from '@ngrx/store';

export enum FlatActionTypes {
  LoadFlat = '[Flat] Load Flat',
  CreateFlat = '[Flat] Create Flat'
}

export class CreateFlat implements Action {
  readonly type = FlatActionTypes.CreateFlat;

  constructor(public payload: { flat: any; id: string }) {}
}

export class LoadFlat implements Action {
  readonly type = FlatActionTypes.LoadFlat;
}

export type FlatActionsUnion = LoadFlat | CreateFlat;
