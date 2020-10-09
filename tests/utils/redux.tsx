import React, { ReactElement, ReactNode } from 'react';
import { render as rntlRender, RenderOptions } from 'react-native-testing-library';
import { createStore, combineReducers, AnyAction, Store } from 'redux';
import { Provider } from 'react-redux';
import auth, { initialState as authInitialState } from '@redux/auth/reducer';
import pokemon, { initialState as pokemonInitialState } from '@redux/pokemon/reducer';
import { IState } from '@interfaces/reduxInterfaces';

const reducers = combineReducers({
  auth,
  pokemon
});

interface ReduxProps {
  initialState?: IState;
  store?: Store<any, AnyAction>;
  renderOptions?: RenderOptions;
}

export function render(
  component: ReactElement,
  {
    initialState = {
      auth: authInitialState,
      pokemon: pokemonInitialState
    },
    store = createStore(reducers, initialState),
    ...renderOptions
  }: ReduxProps = {}
) {
  function Wrapper({ children }: { children: ReactNode }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rntlRender(component, { wrapper: Wrapper, ...renderOptions });
}
