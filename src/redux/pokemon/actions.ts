import { Dispatch } from 'react';
import { PokemonType } from '@interfaces/pokemon';
import { createTypes, completeTypes } from 'redux-recompose';
import * as PokemonService from '@services/PokemonService';
import { ApiOkResponse } from 'apisauce';
import { IPokemonListResponse, Action, IState } from '@interfaces/reduxInterfaces';

export const actions = createTypes(
  completeTypes(['GET_POKEMONS', 'GET_POKEMONS_BY_TYPE', 'GET_POKEMONS_DETAIL', 'GET_POKEMON_SPECIES']),
  '@@POKEMON'
);

const TARGETS = {
  POKEMON_LIST: 'pokemonList',
  POKEMON_DETAIL: 'pokemonDetail',
  POKEMON_SPECIES: 'pokemonSpecies'
};

const actionCreators = {
  getPokemons: (refresh: boolean = true) => (dispatch: Dispatch<Action<number>>, getState: () => IState) => {
    const { next, results } = getState().pokemon.pokemonList;
    const loading = getState().pokemon.pokemonListLoading;
    const offset = refresh ? 0 : results.length;
    if (refresh || (next && !loading))
      dispatch({
        type: actions.GET_POKEMONS,
        target: TARGETS.POKEMON_LIST,
        payload: offset,
        service: PokemonService.getPokemonList
      });
  },
  getPokemonSpecies: () => (dispatch: Dispatch<Action<string>>, getState: () => IState) => {
    const { name } = getState().pokemon.pokemonDetail;
    dispatch({
      type: actions.GET_POKEMON_SPECIES,
      target: TARGETS.POKEMON_SPECIES,
      payload: name,
      service: PokemonService.getPokemonSpecies
    });
  },
  getPokemonDetail: (pokemon: string) => ({
    type: actions.GET_POKEMONS_DETAIL,
    target: TARGETS.POKEMON_DETAIL,
    service: PokemonService.getPokemonDetail,
    payload: pokemon
  }),
  getPokemonByType: (pokemonType: PokemonType) => ({
    type: actions.GET_POKEMONS_BY_TYPE,
    target: TARGETS.POKEMON_LIST,
    service: PokemonService.getPokemonByType,
    payload: pokemonType,
    successSelector: (response: ApiOkResponse<IPokemonListResponse>) => response.data!!.pokemon
  })
};

export default actionCreators;
