import i18next from 'i18next';

import { POKEMON_STATS } from './constants';

i18next.addResources('en', 'BASE_STAT', {
  [POKEMON_STATS.HP]: 'HP',
  [POKEMON_STATS.ATTACK]: 'Attack',
  [POKEMON_STATS.DEFENSE]: 'Defense',
  [POKEMON_STATS.SPECIAL_ATTACK]: 'Sp. Atk',
  [POKEMON_STATS.SPECIAL_DEFENSE]: 'Sp. Def',
  [POKEMON_STATS.SPEED]: 'Speed'
});
