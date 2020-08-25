import { PokemonType } from '@interfaces/pokemon';
import api from '@config/api';

export const getPokemonByType = (pokemonType: PokemonType) => api.get(`type/${pokemonType}`);

export const getPokemonList = (offset: number) => api.get('pokemon', { offset, limit: 10 });

export const getPokemonDetail = (pokemonName: string) => api.get(`pokemon/${pokemonName}`);

export const getPokemonSpecies = (pokemonName: string) => api.get(`pokemon-species/${pokemonName}`);
