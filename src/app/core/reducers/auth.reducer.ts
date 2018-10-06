import { AuthActions } from '@flatify/core/actions';
import { auth } from 'firebase/app';


export interface State {
  user: object | null;
  loading: boolean;
  error: auth.Error | null;
}

export const initialState: State = {
  user: null,
  loading: false,
  error: null
};

export function reducer(state = initialState, action: AuthActions.AuthActions): State {
  switch (action.type) {

    case AuthActions.AuthActionTypes.StartLogin: {
      return {
        ...state,
        loading: true
      };
    }

    case AuthActions.AuthActionTypes.LoginSuccess: {
      return {
        ...state,
        user: action.payload.data,
        loading: false
      };
    }

    case AuthActions.AuthActionTypes.LoginFail: {
      return {
        ...state,
        error: action.payload.error,
        loading: false
      };
    }

    case AuthActions.AuthActionTypes.StartLogout: {
      return {
        ...state,
        loading: true
      };
    }

    case AuthActions.AuthActionTypes.LogoutDone: {
      return initialState;
    }

    default:
      return state;
  }
}

export const getUser = (state: State) => state.user;
export const isLoggedIn = (state: State) => !!state.user;
export const getLoading = (state: State) => state.loading;
export const getError = (state: State) => state.error;
export const hasError = (state: State) => !!state.error;
