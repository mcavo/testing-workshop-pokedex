import i18next from 'i18next';
import Routes from '@constants/routes';

i18next.addResources('en', 'app', {
  [Routes.Stats]: 'Base Stats',
  [Routes.PokemonDetail]: 'PokemonDetail',
  [Routes.PokemonList]: 'Pokedex'
});
