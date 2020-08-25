/* eslint-disable new-cap */
import { createReducer, completeReducer, completeState } from 'redux-recompose';
import Immutable from 'seamless-immutable';
import { onPagination } from '@utils/reduxUtils';

import { actions } from './actions';

const stateDescription = {
  pokemonList: [],
  pokemonDetail: {},
  pokemonSpecies: {}
};

export const initialState = completeState(stateDescription);

const reducerDescription = {
  primaryActions: [
    actions.GET_POKEMONS,
    actions.GET_POKEMONS_BY_TYPE,
    actions.GET_POKEMONS_DETAIL,
    actions.GET_POKEMON_SPECIES
  ],
  override: {
    [actions.GET_POKEMONS_SUCCESS]: onPagination()
  }
};

export default createReducer(Immutable(initialState), completeReducer(reducerDescription));
