import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/src/types';
import Routes from '@constants/routes';

export interface DefaultNavOptions {
  route: RouteProp<any, any>;
}

type RootStackParamList = {
  [Routes.About]: undefined;
  [Routes.Stats]: undefined;
  [Routes.PokemonList]: undefined;
  [Routes.PokemonDetail]: {
    pokemon: string;
  };
};

export type PokemonListNavigationProp = StackNavigationProp<RootStackParamList, Routes.PokemonList>;

export type PokemonListRouteProp = RouteProp<RootStackParamList, Routes.PokemonList>;

export type PokemonDetailNavigationProp = StackNavigationProp<RootStackParamList, Routes.PokemonDetail>;

export type PokemonDetailRouteProp = RouteProp<RootStackParamList, Routes.PokemonDetail>;

export type AboutNavigationProp = StackNavigationProp<RootStackParamList, Routes.About>;
export type StatsNavigationProp = StackNavigationProp<RootStackParamList, Routes.Stats>;

export type PokemonNavigationProp =
  | PokemonListNavigationProp
  | PokemonDetailNavigationProp
  | AboutNavigationProp
  | StatsNavigationProp;
