import * as fromStations from './station.reducer';
import * as fromRoot from '@flatify/reducers';
import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

export interface TransitState {
  stations: fromStations.State;
}

export interface State extends fromRoot.State {
  transit: TransitState;
}

export const reducers: ActionReducerMap<TransitState, any> = {
  stations: fromStations.reducer
};

export const getTransitState = createFeatureSelector<State, TransitState>(
  'transit'
);
export const getStaionsState = createSelector(
  getTransitState,
  state => state.stations
);
export const getAllStations = createSelector(
  getStaionsState,
  fromStations.selectAll
);
export const getStationsLoading = createSelector(
  getStaionsState,
  fromStations.selectLoading
);
