/* eslint-disable new-cap */
import { createReducer, completeReducer, completeState } from 'redux-recompose';
import Immutable, { ImmutableObject } from 'seamless-immutable';
import { CurrentUser } from '@interfaces/authInterfaces';
import { Nullable } from '@interfaces/globalInterfaces';
import { Action, IAuthState } from '@interfaces/reduxInterfaces';

import { actions } from './actions';

const stateDescription = {
  currentUser: null,
  initialLoading: true
};

export const initialState = completeState(stateDescription, ['initialLoading']);

const reducerDescription = {
  primaryActions: [actions.LOGIN, actions.LOGOUT],
  override: {
    [actions.AUTH_INIT]: (state: ImmutableObject<IAuthState>, action: Action<Nullable<CurrentUser>>) =>
      state.merge({
        initialLoading: false,
        [action.target as string]: action.payload
      })
  }
};

export default createReducer(Immutable(initialState), completeReducer(reducerDescription));
