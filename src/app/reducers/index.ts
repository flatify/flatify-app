import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

import * as fromLayout from '@flatify/core/reducers/layout.reducer';
import * as fromAuth from '@flatify/core/reducers/auth.reducer';
import * as fromFlat from '@flatify/core/reducers/flat.reducer';
import { storeFreeze } from 'ngrx-store-freeze';

export interface State {
  layout: fromLayout.State;
  auth: fromAuth.State;
  flat: fromFlat.State;
}

export const reducers: ActionReducerMap<State> = {
  layout: fromLayout.reducer,
  auth: fromAuth.reducer,
  flat: fromFlat.reducer
};

// console.log all actions
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state: State, action: any): any => {
    const result = reducer(state, action);
    console.groupCollapsed(action.type);
    console.log('prev state', state);
    console.log('action', action);
    console.log('next state', result);
    console.groupEnd();

    return result;
  };
}

/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger, storeFreeze]
  : [];

export const getLayoutState = createFeatureSelector<State, fromLayout.State>(
  'layout'
);

export const getAuthState = createFeatureSelector<State, fromAuth.State>(
  'auth'
);
export const getFlatState = createFeatureSelector<State, fromFlat.State>(
  'flat'
);

export const getAuthLoading = createSelector(getAuthState, fromAuth.getLoading);
export const isLoggedIn = createSelector(getAuthState, fromAuth.isLoggedIn);
export const hasAuthError = createSelector(getAuthState, fromAuth.hasError);

export const getIsAssignedToFlat = createSelector(
  getFlatState,
  fromFlat.selectIsAssigned
);
