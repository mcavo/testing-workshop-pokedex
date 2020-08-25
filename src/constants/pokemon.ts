import { GenericObjectInterface } from '@interfaces/globalInterfaces';
import { PokemonType, Effectiveness } from '@interfaces/pokemon';

import {
  normalPrimaryColor,
  normalSecondaryColor,
  fightingPrimaryColor,
  fightingSecondaryColor,
  flyingPrimaryColor,
  flyingSecondaryColor,
  poisonPrimaryColor,
  poisonSecondaryColor,
  groundPrimaryColor,
  groundSecondaryColor,
  rockPrimaryColor,
  rockSecondaryColor,
  bugPrimaryColor,
  bugSecondaryColor,
  ghostPrimaryColor,
  ghostSecondaryColor,
  steelPrimaryColor,
  steelSecondaryColor,
  firePrimaryColor,
  fireSecondaryColor,
  waterPrimaryColor,
  waterSecondaryColor,
  grassPrimaryColor,
  grassSecondaryColor,
  electricPrimaryColor,
  electricSecondaryColor,
  psychicPrimaryColor,
  psychicSecondaryColor,
  icePrimaryColor,
  iceSecondaryColor,
  dragonPrimaryColor,
  dragonSecondaryColor,
  darkPrimaryColor,
  darkSecondaryColor,
  fairyPrimaryColor,
  fairySecondaryColor,
  defaultPrimaryColor,
  defaultSecondaryColor
} from './colors';

export const EFFECTIVENESS_MODIFIER_FORMAT = {
  [Effectiveness.DOUBLE_STRONG]: '4',
  [Effectiveness.STRONG]: '2',
  [Effectiveness.REGULAR]: '1',
  [Effectiveness.WEAK]: '1/2',
  [Effectiveness.DOUBLE_WEAK]: '1/4',
  [Effectiveness.NONE]: '0'
};

export const POKEMON_STRENGHT_CHART: Record<PokemonType, GenericObjectInterface<Effectiveness>> = {
  [PokemonType.NORMAL]: {
    [PokemonType.ROCK]: Effectiveness.WEAK,
    [PokemonType.GHOST]: Effectiveness.NONE,
    [PokemonType.STEEL]: Effectiveness.WEAK
  },
  [PokemonType.FIGHTING]: {
    [PokemonType.NORMAL]: Effectiveness.STRONG,
    [PokemonType.FLYING]: Effectiveness.WEAK,
    [PokemonType.POISON]: Effectiveness.WEAK,
    [PokemonType.ROCK]: Effectiveness.STRONG,
    [PokemonType.BUG]: Effectiveness.WEAK,
    [PokemonType.GHOST]: Effectiveness.NONE,
    [PokemonType.STEEL]: Effectiveness.STRONG,
    [PokemonType.PSYCHIC]: Effectiveness.WEAK,
    [PokemonType.ICE]: Effectiveness.STRONG,
    [PokemonType.DARK]: Effectiveness.STRONG,
    [PokemonType.FAIRY]: Effectiveness.WEAK
  },
  [PokemonType.FLYING]: {
    [PokemonType.FIGHTING]: Effectiveness.STRONG,
    [PokemonType.ROCK]: Effectiveness.WEAK,
    [PokemonType.BUG]: Effectiveness.STRONG,
    [PokemonType.STEEL]: Effectiveness.WEAK,
    [PokemonType.GRASS]: Effectiveness.STRONG,
    [PokemonType.ELECTRIC]: Effectiveness.WEAK
  },
  [PokemonType.POISON]: {
    [PokemonType.POISON]: Effectiveness.WEAK,
    [PokemonType.GROUND]: Effectiveness.WEAK,
    [PokemonType.ROCK]: Effectiveness.WEAK,
    [PokemonType.GHOST]: Effectiveness.WEAK,
    [PokemonType.STEEL]: Effectiveness.NONE,
    [PokemonType.GRASS]: Effectiveness.STRONG,
    [PokemonType.FAIRY]: Effectiveness.STRONG
  },
  [PokemonType.GROUND]: {
    [PokemonType.FLYING]: Effectiveness.NONE,
    [PokemonType.POISON]: Effectiveness.STRONG,
    [PokemonType.ROCK]: Effectiveness.STRONG,
    [PokemonType.BUG]: Effectiveness.WEAK,
    [PokemonType.STEEL]: Effectiveness.STRONG,
    [PokemonType.FIRE]: Effectiveness.STRONG,
    [PokemonType.GRASS]: Effectiveness.WEAK,
    [PokemonType.ELECTRIC]: Effectiveness.STRONG
  },
  [PokemonType.ROCK]: {
    [PokemonType.FIGHTING]: Effectiveness.WEAK,
    [PokemonType.FLYING]: Effectiveness.STRONG,
    [PokemonType.GROUND]: Effectiveness.WEAK,
    [PokemonType.BUG]: Effectiveness.STRONG,
    [PokemonType.STEEL]: Effectiveness.WEAK,
    [PokemonType.FIRE]: Effectiveness.STRONG,
    [PokemonType.ICE]: Effectiveness.STRONG
  },
  [PokemonType.BUG]: {
    [PokemonType.FIGHTING]: Effectiveness.WEAK,
    [PokemonType.FLYING]: Effectiveness.WEAK,
    [PokemonType.POISON]: Effectiveness.WEAK,
    [PokemonType.GHOST]: Effectiveness.WEAK,
    [PokemonType.STEEL]: Effectiveness.WEAK,
    [PokemonType.FIRE]: Effectiveness.WEAK,
    [PokemonType.GRASS]: Effectiveness.STRONG,
    [PokemonType.PSYCHIC]: Effectiveness.STRONG,
    [PokemonType.DARK]: Effectiveness.STRONG,
    [PokemonType.FAIRY]: Effectiveness.WEAK
  },
  [PokemonType.GHOST]: {
    [PokemonType.NORMAL]: Effectiveness.NONE,
    [PokemonType.GHOST]: Effectiveness.STRONG,
    [PokemonType.PSYCHIC]: Effectiveness.STRONG,
    [PokemonType.DARK]: Effectiveness.WEAK
  },
  [PokemonType.STEEL]: {
    [PokemonType.ROCK]: Effectiveness.STRONG,
    [PokemonType.STEEL]: Effectiveness.WEAK,
    [PokemonType.FIRE]: Effectiveness.WEAK,
    [PokemonType.WATER]: Effectiveness.WEAK,
    [PokemonType.ELECTRIC]: Effectiveness.WEAK,
    [PokemonType.ICE]: Effectiveness.STRONG,
    [PokemonType.FAIRY]: Effectiveness.STRONG
  },
  [PokemonType.FIRE]: {
    [PokemonType.ROCK]: Effectiveness.WEAK,
    [PokemonType.BUG]: Effectiveness.STRONG,
    [PokemonType.STEEL]: Effectiveness.STRONG,
    [PokemonType.FIRE]: Effectiveness.WEAK,
    [PokemonType.WATER]: Effectiveness.WEAK,
    [PokemonType.GRASS]: Effectiveness.STRONG,
    [PokemonType.ICE]: Effectiveness.STRONG,
    [PokemonType.DRAGON]: Effectiveness.WEAK
  },
  [PokemonType.WATER]: {
    [PokemonType.GROUND]: Effectiveness.STRONG,
    [PokemonType.ROCK]: Effectiveness.STRONG,
    [PokemonType.FIRE]: Effectiveness.STRONG,
    [PokemonType.WATER]: Effectiveness.WEAK,
    [PokemonType.GRASS]: Effectiveness.WEAK,
    [PokemonType.DRAGON]: Effectiveness.WEAK
  },
  [PokemonType.GRASS]: {
    [PokemonType.FLYING]: Effectiveness.WEAK,
    [PokemonType.POISON]: Effectiveness.WEAK,
    [PokemonType.GROUND]: Effectiveness.STRONG,
    [PokemonType.ROCK]: Effectiveness.STRONG,
    [PokemonType.BUG]: Effectiveness.WEAK,
    [PokemonType.STEEL]: Effectiveness.WEAK,
    [PokemonType.FIRE]: Effectiveness.WEAK,
    [PokemonType.WATER]: Effectiveness.STRONG,
    [PokemonType.GRASS]: Effectiveness.WEAK,
    [PokemonType.DRAGON]: Effectiveness.WEAK
  },
  [PokemonType.ELECTRIC]: {
    [PokemonType.FLYING]: Effectiveness.STRONG,
    [PokemonType.GROUND]: Effectiveness.NONE,
    [PokemonType.WATER]: Effectiveness.STRONG,
    [PokemonType.GRASS]: Effectiveness.WEAK,
    [PokemonType.ELECTRIC]: Effectiveness.WEAK,
    [PokemonType.DRAGON]: Effectiveness.WEAK
  },
  [PokemonType.PSYCHIC]: {
    [PokemonType.FIGHTING]: Effectiveness.STRONG,
    [PokemonType.POISON]: Effectiveness.STRONG,
    [PokemonType.STEEL]: Effectiveness.WEAK,
    [PokemonType.PSYCHIC]: Effectiveness.WEAK,
    [PokemonType.DARK]: Effectiveness.NONE
  },
  [PokemonType.ICE]: {
    [PokemonType.FLYING]: Effectiveness.STRONG,
    [PokemonType.GROUND]: Effectiveness.STRONG,
    [PokemonType.STEEL]: Effectiveness.WEAK,
    [PokemonType.FIRE]: Effectiveness.WEAK,
    [PokemonType.WATER]: Effectiveness.WEAK,
    [PokemonType.GRASS]: Effectiveness.STRONG,
    [PokemonType.ICE]: Effectiveness.WEAK,
    [PokemonType.DRAGON]: Effectiveness.STRONG
  },
  [PokemonType.DRAGON]: {
    [PokemonType.STEEL]: Effectiveness.WEAK,
    [PokemonType.DRAGON]: Effectiveness.STRONG,
    [PokemonType.FAIRY]: Effectiveness.NONE
  },
  [PokemonType.DARK]: {
    [PokemonType.FIGHTING]: Effectiveness.WEAK,
    [PokemonType.GHOST]: Effectiveness.STRONG,
    [PokemonType.PSYCHIC]: Effectiveness.STRONG,
    [PokemonType.DARK]: Effectiveness.WEAK,
    [PokemonType.FAIRY]: Effectiveness.WEAK
  },
  [PokemonType.FAIRY]: {
    [PokemonType.FIGHTING]: Effectiveness.STRONG,
    [PokemonType.POISON]: Effectiveness.WEAK,
    [PokemonType.STEEL]: Effectiveness.WEAK,
    [PokemonType.FIRE]: Effectiveness.WEAK,
    [PokemonType.DRAGON]: Effectiveness.STRONG,
    [PokemonType.DARK]: Effectiveness.STRONG
  }
};

export const getPokemonTypeColorPalette = (pokemonType: PokemonType) =>
  ({
    [PokemonType.NORMAL]: {
      PRIMARY: normalPrimaryColor,
      SECONDARY: normalSecondaryColor
    },
    [PokemonType.FIGHTING]: {
      PRIMARY: fightingPrimaryColor,
      SECONDARY: fightingSecondaryColor
    },
    [PokemonType.FLYING]: {
      PRIMARY: flyingPrimaryColor,
      SECONDARY: flyingSecondaryColor
    },
    [PokemonType.POISON]: {
      PRIMARY: poisonPrimaryColor,
      SECONDARY: poisonSecondaryColor
    },
    [PokemonType.GROUND]: {
      PRIMARY: groundPrimaryColor,
      SECONDARY: groundSecondaryColor
    },
    [PokemonType.ROCK]: {
      PRIMARY: rockPrimaryColor,
      SECONDARY: rockSecondaryColor
    },
    [PokemonType.BUG]: {
      PRIMARY: bugPrimaryColor,
      SECONDARY: bugSecondaryColor
    },
    [PokemonType.GHOST]: {
      PRIMARY: ghostPrimaryColor,
      SECONDARY: ghostSecondaryColor
    },
    [PokemonType.STEEL]: {
      PRIMARY: steelPrimaryColor,
      SECONDARY: steelSecondaryColor
    },
    [PokemonType.FIRE]: {
      PRIMARY: firePrimaryColor,
      SECONDARY: fireSecondaryColor
    },
    [PokemonType.WATER]: {
      PRIMARY: waterPrimaryColor,
      SECONDARY: waterSecondaryColor
    },
    [PokemonType.GRASS]: {
      PRIMARY: grassPrimaryColor,
      SECONDARY: grassSecondaryColor
    },
    [PokemonType.ELECTRIC]: {
      PRIMARY: electricPrimaryColor,
      SECONDARY: electricSecondaryColor
    },
    [PokemonType.PSYCHIC]: {
      PRIMARY: psychicPrimaryColor,
      SECONDARY: psychicSecondaryColor
    },
    [PokemonType.ICE]: {
      PRIMARY: icePrimaryColor,
      SECONDARY: iceSecondaryColor
    },
    [PokemonType.DRAGON]: {
      PRIMARY: dragonPrimaryColor,
      SECONDARY: dragonSecondaryColor
    },
    [PokemonType.DARK]: {
      PRIMARY: darkPrimaryColor,
      SECONDARY: darkSecondaryColor
    },
    [PokemonType.FAIRY]: {
      PRIMARY: fairyPrimaryColor,
      SECONDARY: fairySecondaryColor
    }
  }[pokemonType] || {
    PRIMARY: defaultPrimaryColor,
    SECONDARY: defaultSecondaryColor
  });
