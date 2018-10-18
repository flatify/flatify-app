import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Station } from '../models/station.model';

export enum StationActionTypes {
  LoadStations = '[Station] Load Stations',
  AddStation = '[Station] Add Station',
  UpsertStation = '[Station] Upsert Station',
  AddStations = '[Station] Add Stations',
  UpsertStations = '[Station] Upsert Stations',
  UpdateStation = '[Station] Update Station',
  UpdateStations = '[Station] Update Stations',
  DeleteStation = '[Station] Delete Station',
  DeleteStations = '[Station] Delete Stations',
  ClearStations = '[Station] Clear Stations'
}

export class LoadStations implements Action {
  readonly type = StationActionTypes.LoadStations;

  constructor(public payload: { stations: Station[] }) {}
}

export class AddStation implements Action {
  readonly type = StationActionTypes.AddStation;

  constructor(public payload: { station: Station }) {}
}

export class UpsertStation implements Action {
  readonly type = StationActionTypes.UpsertStation;

  constructor(public payload: { station: Station }) {}
}

export class AddStations implements Action {
  readonly type = StationActionTypes.AddStations;

  constructor(public payload: { stations: Station[] }) {}
}

export class UpsertStations implements Action {
  readonly type = StationActionTypes.UpsertStations;

  constructor(public payload: { stations: Station[] }) {}
}

export class UpdateStation implements Action {
  readonly type = StationActionTypes.UpdateStation;

  constructor(public payload: { station: Update<Station> }) {}
}

export class UpdateStations implements Action {
  readonly type = StationActionTypes.UpdateStations;

  constructor(public payload: { stations: Update<Station>[] }) {}
}

export class DeleteStation implements Action {
  readonly type = StationActionTypes.DeleteStation;

  constructor(public payload: { id: string }) {}
}

export class DeleteStations implements Action {
  readonly type = StationActionTypes.DeleteStations;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearStations implements Action {
  readonly type = StationActionTypes.ClearStations;
}

export type StationActionsUnion =
  | LoadStations
  | AddStation
  | UpsertStation
  | AddStations
  | UpsertStations
  | UpdateStation
  | UpdateStations
  | DeleteStation
  | DeleteStations
  | ClearStations;
