import { ActionReducerMap } from '@ngrx/store';
import * as fromRoot from '@flatify/reducers';
import * as fromFlats from '@flatify/flats/reducers/flat.reducer';

export interface FlatsState {
  flats: fromFlats.State;
}

export interface State extends fromRoot.State {
  flatsState: FlatsState;
}

export const reducers: ActionReducerMap<FlatsState> = {
  flats: fromFlats.reducer
};
