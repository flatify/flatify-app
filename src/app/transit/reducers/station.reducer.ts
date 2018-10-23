import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Station } from '../models/station.model';
import {
  StationActionsUnion,
  StationActionTypes
} from '../actions/station.actions';
import {
  AppActionsUnion,
  AppActionTypes
} from '@flatify/core/actions/app.actions';

export interface State extends EntityState<Station> {
  // additional entities state properties
  loading: boolean;
}

export const adapter: EntityAdapter<Station> = createEntityAdapter<Station>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  loading: true
});

export function reducer(
  state = initialState,
  action: StationActionsUnion | AppActionsUnion
): State {
  switch (action.type) {
    case StationActionTypes.AddStation: {
      return adapter.addOne(action.payload.station, state);
    }

    case StationActionTypes.UpsertStation: {
      return {
        ...adapter.upsertOne(action.payload.station, state),
        loading: false
      };
    }

    case StationActionTypes.AddStations: {
      return adapter.addMany(action.payload.stations, state);
    }

    case StationActionTypes.UpsertStations: {
      return adapter.upsertMany(action.payload.stations, state);
    }

    case StationActionTypes.UpdateStation: {
      return adapter.updateOne(action.payload.station, state);
    }

    case StationActionTypes.UpdateStations: {
      return adapter.updateMany(action.payload.stations, state);
    }

    case StationActionTypes.DeleteStation: {
      return adapter.removeOne(action.payload.id, state);
    }

    case StationActionTypes.DeleteStations: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case AppActionTypes.SetFlat: {
      return adapter.addAll(action.payload.stations, state);
    }

    case StationActionTypes.LoadStations: {
      return adapter.addAll(action.payload.stations, state);
    }

    case StationActionTypes.ClearStations: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors();

export const selectLoading = state => state.loading;
