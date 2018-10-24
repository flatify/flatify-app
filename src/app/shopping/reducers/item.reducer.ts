import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import {
  ShoppingActionsUnion,
  ShoppingActionTypes
} from '@flatify/shopping/actions/shopping.actions';
import { ShoppingItem } from '@flatify/shopping/models/shoppingItem.model';

export interface State extends EntityState<ShoppingItem> {
  // additional entities state properties
  loading: boolean;
}

export const adapter: EntityAdapter<ShoppingItem> = createEntityAdapter<
  ShoppingItem
>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  loading: true
});

export function reducer(
  state = initialState,
  action: ShoppingActionsUnion
): State {
  switch (action.type) {
    case ShoppingActionTypes.AddItemSuccess: {
      return adapter.addOne(action.payload.Item, state);
    }

    case ShoppingActionTypes.UpsertItem: {
      return adapter.upsertOne(action.payload.Item, state);
    }

    case ShoppingActionTypes.AddItems: {
      return adapter.addMany(action.payload.Items, state);
    }

    case ShoppingActionTypes.UpsertItems: {
      return adapter.upsertMany(action.payload.Items, state);
    }

    case ShoppingActionTypes.UpdateItem: {
      return adapter.updateOne(action.payload.Item, state);
    }

    case ShoppingActionTypes.UpdateItems: {
      return adapter.updateMany(action.payload.Items, state);
    }

    case ShoppingActionTypes.DeleteItem: {
      return adapter.removeOne(action.payload.id, state);
    }

    case ShoppingActionTypes.DeleteItems: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case ShoppingActionTypes.LoadItems: {
      return adapter.addAll(action.payload.Items, state);
    }

    case ShoppingActionTypes.ClearItems: {
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
