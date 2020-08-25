import { Dispatch } from 'react';
import { ApiOkResponse, ApiErrorResponse } from 'apisauce';
import { PokemonType } from '@interfaces/pokemon';
import { CurrentUser } from '@interfaces/authInterfaces';
import { Nullable } from '@interfaces/globalInterfaces';

export interface Action<T = null, P = null, K = null> {
  type: string;
  target?: string;
  payload?: T;
  key?: string;
  index?: number;
  service?: Function;
  injections?: any[];
  successSelector?: (response: ApiOkResponse<P>) => K;
  failureSelector?: (response: ApiErrorResponse<P>) => K;
}

export type DispatcheableAction<T = null, P = null, K = null> = (
  dispatch: Dispatch<Action<T, P, K>>,
  getState: () => IState
) => void;

interface ILanguage {
  name: string;
}

export interface IPokemonListItem {
  name: string;
  url: string;
}

export interface IPokemonType {
  type: {
    name: PokemonType;
    url: string;
  };
}

export interface IPokemonStat {
  baseStat: number;
  effort: number;
  stat: {
    name: string;
  };
}

export interface IPokemonAbility {
  ability: {
    name: string;
  };
}

export interface IPokemon {
  sprites: {
    frontDefault: string;
    frontShiny: string;
  };
  weight: number;
  height: number;
  name: string;
  id: number;
  types: Array<IPokemonType>;
  stats: Array<IPokemonStat>;
  abilities: Array<IPokemonAbility>;
}

export interface IPokemonListResponse {
  pokemon: Array<IPokemonListItem>;
}

interface IPokemonList {
  next: string;
  count: number;
  results: Array<IPokemonListItem>;
}

export interface IFlavorTextEntry {
  flavorText: string;
  language: ILanguage;
}

export interface IGenus {
  genus: string;
  language: ILanguage;
}

export interface IPokemonSpecies {
  evolutionChain: {
    url: string;
  };
  flavorTextEntries: Array<IFlavorTextEntry>;
  genera: Array<IGenus>;
}

export interface IPokemonState {
  pokemonList: IPokemonList;
  pokemonListLoading: boolean;
  pokemonListError: string | null;
  pokemonDetail: IPokemon;
  pokemonDetailLoading: boolean;
  pokemonDetailError: string | null;
  pokemonSpecies: IPokemonSpecies;
  pokemonSpeciesLoading: boolean;
  pokemonSpeciesError: string | null;
}

export interface IAuthState {
  initialLoading: boolean;
  currentUser: Nullable<CurrentUser>;
  currentUserLoading: boolean;
  currentUserError: Nullable<string>;
}

export interface IState {
  pokemon: IPokemonState;
  auth: IAuthState;
}

export interface ReduxObject {
  getState: () => IState;
}
