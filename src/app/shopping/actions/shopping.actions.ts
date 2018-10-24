import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { ShoppingItem } from '../models/shoppingItem.model';
import { UpdateStr } from '@ngrx/entity/src/models';

export enum ShoppingActionTypes {
  LoadItems = '[Shopping] Load Items',
  StartLoadItems = '[Shopping] Load Items Start',
  AddItem = '[Shopping] Add Item',
  AddItemSuccess = '[Shopping] Add Item Success',
  UpsertItem = '[Shopping] Upsert Item',
  AddItems = '[Shopping] Add Items',
  UpsertItems = '[Shopping] Upsert Items',
  StartUpdateItem = '[Shopping] Update Item Start',
  UpdateItem = '[Shopping] Update Item',
  UpdateItems = '[Shopping] Update Items',
  DeleteItem = '[Shopping] Delete Item',
  DeleteItems = '[Shopping] Delete Items',
  ClearItems = '[Shopping] Clear Items'
}

export class LoadItems implements Action {
  readonly type = ShoppingActionTypes.LoadItems;

  constructor(public payload: { Items: ShoppingItem[] }) {}
}

export class StartLoadItems implements Action {
  readonly type = ShoppingActionTypes.StartLoadItems;
}

export class AddItemSuccess implements Action {
  readonly type = ShoppingActionTypes.AddItemSuccess;

  constructor(public payload: { Item: ShoppingItem }) {}
}

export class AddItem implements Action {
  readonly type = ShoppingActionTypes.AddItem;

  constructor(public payload: { name: string }) {}
}

export class UpsertItem implements Action {
  readonly type = ShoppingActionTypes.UpsertItem;

  constructor(public payload: { Item: ShoppingItem }) {}
}

export class AddItems implements Action {
  readonly type = ShoppingActionTypes.AddItems;

  constructor(public payload: { Items: ShoppingItem[] }) {}
}

export class UpsertItems implements Action {
  readonly type = ShoppingActionTypes.UpsertItems;

  constructor(public payload: { Items: ShoppingItem[] }) {}
}

export class StartUpdateItem implements Action {
  readonly type = ShoppingActionTypes.StartUpdateItem;

  constructor(public payload: { Item: UpdateStr<ShoppingItem> }) {}
}

export class UpdateItem implements Action {
  readonly type = ShoppingActionTypes.UpdateItem;

  constructor(public payload: { Item: Update<ShoppingItem> }) {}
}

export class UpdateItems implements Action {
  readonly type = ShoppingActionTypes.UpdateItems;

  constructor(public payload: { Items: Update<ShoppingItem>[] }) {}
}

export class DeleteItem implements Action {
  readonly type = ShoppingActionTypes.DeleteItem;

  constructor(public payload: { id: string }) {}
}

export class DeleteItems implements Action {
  readonly type = ShoppingActionTypes.DeleteItems;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearItems implements Action {
  readonly type = ShoppingActionTypes.ClearItems;
}

export type ShoppingActionsUnion =
  | LoadItems
  | StartLoadItems
  | AddItem
  | AddItemSuccess
  | UpsertItem
  | AddItems
  | UpsertItems
  | StartUpdateItem
  | UpdateItem
  | UpdateItems
  | DeleteItem
  | DeleteItems
  | ClearItems;
