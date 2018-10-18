import { Action } from '@ngrx/store';

export enum FlatActionTypes {
  LoadFlats = '[Flat] Load Flats'
}

export class LoadFlats implements Action {
  readonly type = FlatActionTypes.LoadFlats;
}

export type FlatActionsUnion = LoadFlats;
