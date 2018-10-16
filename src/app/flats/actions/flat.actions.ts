import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Flat } from '../models/flat.model';

export enum FlatActionTypes {
  LoadFlatsStart = '[Flat] Start Load Flats',
  LoadFlatsSuccess = '[Flat] Load Flats Success',
  AddFlat = '[Flat] Add Flat',
  UpsertFlat = '[Flat] Upsert Flat',
  AddFlats = '[Flat] Add Flats',
  UpsertFlats = '[Flat] Upsert Flats',
  UpdateFlat = '[Flat] Update Flat',
  UpdateFlats = '[Flat] Update Flats',
  DeleteFlat = '[Flat] Delete Flat',
  DeleteFlats = '[Flat] Delete Flats',
  ClearFlats = '[Flat] Clear Flats'
}

export class LoadFlats implements Action {
  readonly type = FlatActionTypes.LoadFlatsStart;
}

export class LoadFlatsSuccess implements Action {
  readonly type = FlatActionTypes.LoadFlatsSuccess;

  constructor(public payload: { flats: Flat[] }) {
  }
}

export class AddFlat implements Action {
  readonly type = FlatActionTypes.AddFlat;

  constructor(public payload: { flat: Flat }) {
  }
}

export class UpsertFlat implements Action {
  readonly type = FlatActionTypes.UpsertFlat;

  constructor(public payload: { flat: Flat }) {
  }
}

export class AddFlats implements Action {
  readonly type = FlatActionTypes.AddFlats;

  constructor(public payload: { flats: Flat[] }) {
  }
}

export class UpsertFlats implements Action {
  readonly type = FlatActionTypes.UpsertFlats;

  constructor(public payload: { flats: Flat[] }) {
  }
}

export class UpdateFlat implements Action {
  readonly type = FlatActionTypes.UpdateFlat;

  constructor(public payload: { flat: Update<Flat> }) {
  }
}

export class UpdateFlats implements Action {
  readonly type = FlatActionTypes.UpdateFlats;

  constructor(public payload: { flats: Update<Flat>[] }) {
  }
}

export class DeleteFlat implements Action {
  readonly type = FlatActionTypes.DeleteFlat;

  constructor(public payload: { id: string }) {
  }
}

export class DeleteFlats implements Action {
  readonly type = FlatActionTypes.DeleteFlats;

  constructor(public payload: { ids: string[] }) {
  }
}

export class ClearFlats implements Action {
  readonly type = FlatActionTypes.ClearFlats;
}

export type FlatActionsUnion =
  LoadFlatsSuccess
  | AddFlat
  | UpsertFlat
  | AddFlats
  | UpsertFlats
  | UpdateFlat
  | UpdateFlats
  | DeleteFlat
  | DeleteFlats
  | ClearFlats
  | LoadFlats;
