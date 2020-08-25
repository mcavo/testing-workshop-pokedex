import { ApiOkResponse } from 'apisauce';
import { Dispatch } from 'react';
import { createTypes, completeTypes, withPostSuccess } from 'redux-recompose';
import * as AuthService from '@services/AuthService';
import { CurrentUser, AuthData } from '@interfaces/authInterfaces';
import { Action } from '@interfaces/reduxInterfaces';

export const actions = createTypes(completeTypes(['LOGIN', 'LOGOUT'], ['AUTH_INIT']), '@@AUTH');

const TARGETS = {
  CURRENT_USER: 'currentUser'
};

const actionCreators = {
  init: () => async (dispatch: Dispatch<Action<any>>) => {
    const currentUser = await AuthService.authSetup();
    dispatch({
      type: actions.AUTH_INIT,
      target: TARGETS.CURRENT_USER,
      payload: currentUser
    });
  },
  login: (authData: AuthData) => ({
    type: actions.LOGIN,
    target: TARGETS.CURRENT_USER,
    service: AuthService.login,
    payload: authData,
    injections: [
      withPostSuccess((_: any, response: ApiOkResponse<CurrentUser>) => {
        AuthService.setCurrentUser(response.data!);
      })
    ]
  }),
  logout: () => ({
    type: actions.LOGOUT,
    target: TARGETS.CURRENT_USER,
    service: AuthService.logout,
    injections: [
      withPostSuccess(async () => {
        await AuthService.removeCurrentUser();
      })
    ]
  })
};

export default actionCreators;
