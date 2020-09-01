import { POKEMON_STRENGHT_CHART, EFFECTIVENESS_MODIFIER_FORMAT } from '@constants/pokemon';
import { PokemonType, Effect, Effectiveness } from '@interfaces/pokemon';
import { IPokemonAbility } from '@interfaces/reduxInterfaces';

import { capitalize, formatFloat } from './stringUtils';

const UNKNOWN = '???';

const getEffectModifierAgainstType = (effect: Effect, againstType: PokemonType, type: PokemonType) => {
  const x = effect === Effect.STRENGTH ? type : againstType;
  const y = effect === Effect.STRENGTH ? againstType : type;
  return POKEMON_STRENGHT_CHART[x]?.[y] || Effectiveness.REGULAR;
};

const getEffectModifier = (effect: Effect, againstType: PokemonType, types: Array<PokemonType>) => {
  let modifier = Effectiveness.REGULAR;
  types.forEach(type => (modifier *= getEffectModifierAgainstType(effect, againstType, type)));
  return modifier as Effectiveness;
};

const getTypeEffects = (effect: Effect, types: Array<PokemonType>): Record<PokemonType, Effectiveness> =>
  Object.values(PokemonType).reduce<Record<PokemonType, Effectiveness>>((typeWeaknesses, type) => {
    const modifier = getEffectModifier(effect, type, types);
    if (modifier !== Effectiveness.REGULAR) typeWeaknesses[type] = modifier;
    return typeWeaknesses;
  }, {} as Record<PokemonType, Effectiveness>);

export const getTypeWeaknesses = (types: Array<PokemonType>) => getTypeEffects(Effect.WEAKNESS, types);

export const getTypeStrengths = (types: Array<PokemonType>) => getTypeEffects(Effect.STRENGTH, types);

const INDEX_DIGITS = -3;
export const formatPokemonIndex = (index: number) => `#${`00${index}`.slice(INDEX_DIGITS)}`;

export const formatPokemonName = (name: string) => capitalize(name);

export const formatPokemonTextEntry = (entry?: string) => entry?.replace(/[^\x20-\x7E]/gim, ' ') || UNKNOWN;

export const formatPokemonSpecies = (species?: string) => species?.replace(' Pokémon', '') || UNKNOWN;

const MEASURE_MULTIPLIER = 0.1;
export const formatPokemonHeight = (height: number) =>
  height ? `${formatFloat(height * MEASURE_MULTIPLIER)} m` : UNKNOWN;
export const formatPokemonWeight = (weight: number) =>
  weight ? `${formatFloat(weight * MEASURE_MULTIPLIER)} kg` : UNKNOWN;

export const formatPokemonAbilities = (abilities: Array<IPokemonAbility>) =>
  abilities?.map((ability: IPokemonAbility) => capitalize(ability.ability.name)).join(', ');

export const formatPokemonModifier = (modifier: Effectiveness) =>
  `${EFFECTIVENESS_MODIFIER_FORMAT[modifier]}x`;
