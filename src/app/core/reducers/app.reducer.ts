import { User } from '@flatify/core/models/user';
import {
  AppActionsUnion,
  AppActionTypes
} from '@flatify/core/actions/app.actions';
import {
  FlatActionsUnion,
  FlatActionTypes
} from '@flatify/core/actions/flat.actions';

export interface State {
  user: User | null;
  flat: any | null;
  joinStatus: string;
}

export const initialState: State = {
  user: null,
  flat: null,
  joinStatus: 'fresh'
};

export function reducer(
  state = initialState,
  action: AppActionsUnion | FlatActionsUnion
): State {
  switch (action.type) {
    case AppActionTypes.SetUser: {
      return { ...state, user: action.payload };
    }

    case FlatActionTypes.JoinFlat: {
      return {
        ...state,
        joinStatus: 'joining'
      };
    }

    case AppActionTypes.SetFlatId: {
      return {
        ...state,
        user: { ...state.user, flatId: action.payload.flatId }
      };
    }

    case AppActionTypes.SetFlat: {
      return { ...state, flat: action.payload };
    }

    default:
      return state;
  }
}

export const selectHasFlat = (state: State) => !!state.flat;
export const selectFlat = (state: State) => state.flat;
