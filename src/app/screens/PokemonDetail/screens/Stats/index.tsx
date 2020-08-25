import React, { useMemo } from 'react';
import { View, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { getTypeWeaknesses, getTypeStrengths, formatPokemonName } from '@utils/pokemon';
import { IState, IPokemon, IPokemonType } from '@interfaces/reduxInterfaces';
import { Effect } from '@interfaces/pokemon';

import styles from './styles';
import PokemonStats from './components/PokemonStats';
import TypeEffectiveness from './components/TypeEffectiveness';

function Stats() {
  const pokemonDetail = useSelector<IState, IPokemon>(state => state.pokemon.pokemonDetail);
  const { name, stats, types } = pokemonDetail;
  const pokemonName = formatPokemonName(name)!!;
  const pokemonTypes = useMemo(
    () => types.map(({ type: { name: pokemonType } }: IPokemonType) => pokemonType),
    [types]
  );
  const weaknesses = useMemo(() => getTypeWeaknesses(pokemonTypes), [pokemonTypes]);
  const strengths = useMemo(() => getTypeStrengths(pokemonTypes), [pokemonTypes]);
  return (
    <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <PokemonStats stats={stats} />
        <TypeEffectiveness name={pokemonName} effect={Effect.WEAKNESS} types={weaknesses} />
        <TypeEffectiveness name={pokemonName} effect={Effect.STRENGTH} types={strengths} />
      </View>
    </ScrollView>
  );
}

export default Stats;
