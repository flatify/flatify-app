import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Flat } from '../models/flat.model';
import { FlatActionsUnion, FlatActionTypes } from '@flatify/flats/actions/flat.actions';

export interface State extends EntityState<Flat> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Flat> = createEntityAdapter<Flat>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(
  state = initialState,
  action: FlatActionsUnion
): State {
  switch (action.type) {
    case FlatActionTypes.AddFlat: {
      return adapter.addOne(action.payload.flat, state);
    }

    case FlatActionTypes.UpsertFlat: {
      return adapter.upsertOne(action.payload.flat, state);
    }

    case FlatActionTypes.AddFlats: {
      return adapter.addMany(action.payload.flats, state);
    }

    case FlatActionTypes.UpsertFlats: {
      return adapter.upsertMany(action.payload.flats, state);
    }

    case FlatActionTypes.UpdateFlat: {
      return adapter.updateOne(action.payload.flat, state);
    }

    case FlatActionTypes.UpdateFlats: {
      return adapter.updateMany(action.payload.flats, state);
    }

    case FlatActionTypes.DeleteFlat: {
      return adapter.removeOne(action.payload.id, state);
    }

    case FlatActionTypes.DeleteFlats: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case FlatActionTypes.LoadFlatsSuccess: {
      return adapter.addAll(action.payload.flats, state);
    }

    case FlatActionTypes.ClearFlats: {
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
