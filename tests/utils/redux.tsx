import React, { ReactElement, ReactNode } from 'react';
import { render as rntlRender, RenderOptions } from 'react-native-testing-library';
import { createStore, combineReducers } from 'redux';
import { Provider, ProviderProps } from 'react-redux';
import auth, { initialState as authInitialState } from '@redux/auth/reducer';
import pokemon, { initialState as pokemonInitialState } from '@redux/pokemon/reducer';
import { IState } from '@interfaces/reduxInterfaces';

const reducers = combineReducers({
  auth,
  pokemon
});

interface Props extends ProviderProps {
  initialState: IState;
  renderOptions: RenderOptions;
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
  }: Props = {}
) {
  function Wrapper({ children }: { children: ReactNode }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rntlRender(component, { wrapper: Wrapper, ...renderOptions });
}
