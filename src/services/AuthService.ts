import AsyncStorage from '@react-native-community/async-storage';
import api from '@config/api';
import { CurrentUser, AuthData } from '@interfaces/authInterfaces';

const CURRENT_USER_KEY = '@Auth:currentUser';

// TODO: Adapt returned object to:
//   sessionToken: usually currentUser.access_token
//   Also don't forget to add any relevant user data needed for your app.
const formatUser = (currentUser: CurrentUser) => currentUser;

export const setCurrentUser = (currentUser: CurrentUser) => {
  api.setHeader('Authorization', `Bearer ${currentUser.sessionToken}`);
  return AsyncStorage.setItem(CURRENT_USER_KEY, JSON.stringify(formatUser(currentUser)));
};
export const getCurrentUser = () =>
  AsyncStorage.getItem(CURRENT_USER_KEY).then(value => JSON.parse(`${value}`));
export const removeCurrentUser = () => AsyncStorage.removeItem(CURRENT_USER_KEY);

export const authSetup = async () => {
  const currentUser = await getCurrentUser();
  return currentUser;
};

export const login = (_: AuthData) => {
  // TODO: Implement call to authentication API here
  // TODO: If you want to test the error
  // return Promise.resolve({
  //   ok: false,
  //   problem: 'CLIENT_ERROR',
  //   originalError: {}
  // });
  return Promise.resolve({
    ok: true,
    problem: null,
    originalError: null,
    data: { sessionToken: 'token' }
  });
};

export const logout = () => {
  // TODO: Implement call to authentication API here
  // TODO: If you want to test the error
  // return Promise.resolve({
  //   ok: false,
  //   problem: 'CLIENT_ERROR',
  //   originalError: {}
  // });
  return Promise.resolve({
    ok: true,
    problem: null,
    originalError: null,
    data: null
  });
};
