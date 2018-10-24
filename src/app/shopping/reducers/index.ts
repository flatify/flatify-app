import * as fromItems from './item.reducer';
import * as fromRoot from '@flatify/reducers';
import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

export interface ShoppingState {
  items: fromItems.State;
}

export interface State extends fromRoot.State {
  shopping: ShoppingState;
}

export const reducers: ActionReducerMap<ShoppingState, any> = {
  items: fromItems.reducer
};

export const getShoppingState = createFeatureSelector<State, ShoppingState>(
  'shopping'
);
export const getItemsSTate = createSelector(
  getShoppingState,
  state => state.items
);
export const getAllItems = createSelector(getItemsSTate, fromItems.selectAll);
export const getItemsLoading = createSelector(
  getItemsSTate,
  fromItems.selectLoading
);
