import { Action } from '@ngrx/store';

export enum FlatActionTypes {
  LoadFlat = '[Flat] Load Flat',
  CreateFlat = '[Flat] Create Flat',
  JoinFlat = '[Flat] Join Flat',
  SetStations = '[Flat] Set Stations',
  RemoveStation = '[Flat] Remove Station'
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

export class SetStations implements Action {
  readonly type = FlatActionTypes.SetStations;

  constructor(
    public payload: {
      stations: {
        id: string;
        name: string;
        footway: number;
        products: string[];
        results: number;
      }[];
      flatId: string;
    }
  ) {}
}

export class RemoveStation implements Action {
  readonly type = FlatActionTypes.RemoveStation;

  constructor(public payload: { stationId: string }) {}
}

export type FlatActionsUnion =
  | LoadFlat
  | CreateFlat
  | JoinFlat
  | SetStations
  | RemoveStation;
