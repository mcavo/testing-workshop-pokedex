import { actions, targets } from "@redux/pokemon/actions";
import reducerPokemon, { initialState } from '@redux/pokemon/reducer';

const POKEMON = { id: 1, pokemon: 'pikachu' };
const ERROR = { message: 'Not such pokemon', status: 404 }

const EXPECTED_DEFAULT = { ...initialState, [`${targets.POKEMON_DETAIL}Loading`]: true };

describe('getPokemonDetail', () => {
    test('DEFAULT', () => {
      const action = {
        type: actions.GET_POKEMONS_DETAIL,
        target: targets.POKEMON_DETAIL
      };
      expect(reducerPokemon(undefined, action)).toEqual(EXPECTED_DEFAULT);
    });

    test('SUCCESS', () => {
      const action = {
        type: actions.GET_POKEMONS_DETAIL_SUCCESS,
        target: targets.POKEMON_DETAIL,
        payload: POKEMON
      };
      expect(reducerPokemon(EXPECTED_DEFAULT, action)).toEqual(
        { ...initialState, [targets.POKEMON_DETAIL]: POKEMON, [`${targets.POKEMON_DETAIL}Loading`]: false  }
      );
    });

    test('FAILURE', () => {
      const action = {
        type: actions.GET_POKEMONS_DETAIL_FAILURE,
        target: targets.POKEMON_DETAIL,
        payload: ERROR
      };
      expect(reducerPokemon(EXPECTED_DEFAULT, action)).toEqual(
        { ...initialState, [`${targets.POKEMON_DETAIL}Error`]: ERROR, [`${targets.POKEMON_DETAIL}Loading`]: false  }
      );
    });
});