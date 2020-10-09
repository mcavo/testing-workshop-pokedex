import { Dispatch } from 'react';
import { AnyAction } from 'redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { fetchMiddleware } from 'redux-recompose';
import { initialState as authInitialState } from '@redux/auth/reducer';
import { initialState as pokemonInitialState } from '@redux/pokemon/reducer';

function waitForInjections() {
  return new Promise(resolve => setImmediate(resolve));
}

const createWaitForInjections = () => {
  return () => (next: Dispatch<AnyAction>) => async (action: AnyAction) => {
    const result = await next(action);
    await waitForInjections();
    return result;
  };
};

const waitForInjectionsMiddleware = createWaitForInjections();

const middlewares = [waitForInjectionsMiddleware, thunk, fetchMiddleware];

export const mockStore = configureStore(middlewares);
const initialState = {
  auth: authInitialState,
  pokemon: pokemonInitialState
};

export default mockStore(initialState);
