import { FlatActionsUnion } from '@flatify/core/actions/flat.actions';

export interface State {
  isAssigned: boolean;
  name: string;
  inviteCode: string;
  inhabitants: string[];
}

export const initialState: State = {
  isAssigned: false,
  name: '',
  inviteCode: '',
  inhabitants: []
};

export function reducer(state = initialState, action: FlatActionsUnion): State {
  switch (action.type) {
    default:
      return state;
  }
}

export const selectIsAssigned = (state: State) => state.isAssigned;
