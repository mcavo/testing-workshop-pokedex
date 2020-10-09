import store from '@redux/__mocks__/store';
import api from '@config/api';
import PokemonActions, { actions, targets } from '@redux/pokemon/actions';

const data = { id: 1, pokemon: 'pikachu' };
const problem = { message: 'Not such pokemon', status: 404 }

describe('getPokemonDetail', () => {
  beforeEach(() => store.clearActions());

  test('FAILURE', async () => {
    api.get = jest.fn().mockImplementation(() => ({ ok: false, problem }));
    await store.dispatch(PokemonActions.getPokemonDetail('pikachu'));
    expect(store.getActions()).toEqual([
      { target: targets.POKEMON_DETAIL, type: actions.GET_POKEMONS_DETAIL },
      { target: targets.POKEMON_DETAIL, type: actions.GET_POKEMONS_DETAIL_FAILURE, payload: problem }
    ]);
  })

  test('SUCCESS', async () => {
    api.get = jest.fn().mockImplementation(() => ({ ok: true, data }));
    await store.dispatch(PokemonActions.getPokemonDetail('jigglypuff'));
    expect(store.getActions()).toEqual([
      { target: targets.POKEMON_DETAIL, type: actions.GET_POKEMONS_DETAIL },
      { target: targets.POKEMON_DETAIL, type: actions.GET_POKEMONS_DETAIL_SUCCESS, payload: data }
    ]);
  });

});
